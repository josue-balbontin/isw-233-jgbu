import { ApiBase } from "../../services/api/ApiBase.js";
import { AppGrilla } from "../app-grilla/app-grilla.js";
import { AppTarjeta } from "../app-tarjeta/app-tarjeta.js";
import { tarjetaVerticalFavorito } from "../../services/tarjetaFactory.js";

import { Buscadorinput } from "../../services/BuscadorInput.js";
import { Filtro } from "../../services/Filtro.js";
import { blogFavoritos } from "../../services/BlogFavoritos.js";
import { WrapperIntersectionObserver } from "../../services/WrapperIntersationObserver.js";
import { WrapperMutationObserver } from "../../services/WrapperMutationObserver.js";

import estiloBlog from './page-blog.css?inline';

const html = /*html*/` 
    <section class = "page-blog">
        <h1 class="page-blog__titulo">Blog </h1>
        
        <div class= "page-blog__buscador">
            <div>
                <input type="text" placeholder="Buscar blog" class="page-blog__input-buscar"><button class="page-blog__boton-categoria">categoria</button>
                <button class="page-blog__boton-buscar">Buscar</button>
            </div>

            <div class="page-blog__categorias page-blog__categorias--oculto " >
            </div>
        
        </div>

        <app-grilla columnas="3"></app-grilla>
        
    
    </section>
`;


export class PageBlog extends HTMLElement {
    private shadow: ShadowRoot;
    private datos: Array<Record<string, any>>;
    private datosFiltrados: Array<Record<string, any>>;
    private categoriasvalores: string[];
    private datosTitulo: string;
    private datosCategoria: string;
    private url: string;
    private observer: WrapperIntersectionObserver | null;
    private mutationObserver: WrapperMutationObserver | null;

    obtener!: () => Promise<Array<Record<string, any>>>;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });

        this.datos = [];
        this.datosFiltrados = [];
        this.categoriasvalores = [];

        this.datosTitulo = "titulo";
        this.datosCategoria = "categoria";

        this.url = "./data/blog.json";

        this.observer = null;
        this.mutationObserver = null;
    }

    async connectedCallback(): Promise<void> {
            
        this.crearHTML();

        this.iniciarMutationObserver();
    
        await this.cargarDatos(); 

        this.inicializarCategorias(); 

        this.imprimirDatos(this.datos);
 
        this.buscador(); 

        this.categorias(); 

        this.inicializarFavoritos(); 
    }

    disconnectedCallback(): void {
        if (this.observer) {
            this.observer.destructor();
            this.observer = null;
        }

        if (this.mutationObserver) {
            this.mutationObserver.destructor();
            this.mutationObserver = null;
        }
    }

    crearHTML(): void {
        this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        style.innerHTML = estiloBlog;

        this.shadow.appendChild(style);

    }


    async cargarDatos(): Promise<void> {
        this.datos = await this.obtener();
        
        this.categoriasvalores = Filtro.obtenerValoresUnicos(this.datos , this.datosCategoria);
        
    }

    inicializarCategorias(): void {
        const blogCategorias = this.shadow.querySelector<HTMLElement>('.page-blog__categorias');
        if (!blogCategorias) {
            return;
        }

        const opcionesHTML = this.categoriasvalores.map((elemento) => {
                     return `<p>${elemento}</p>`;
        }).join('');

        blogCategorias.innerHTML = `<p>Todos</p>` + opcionesHTML;

    }

    imprimirDatos(datos: Array<Record<string, any>>): void {
        
        const tarjetasHTML = datos.map(
                (dato) => {
                    if(blogFavoritos.esFavorito(dato.id)){
                        return tarjetaVerticalFavorito.crearTarjeta(dato , " page-blog__boton-favorito page-blog__boton-favorito--favorito" , true);
                    }
                    else{
                         return tarjetaVerticalFavorito.crearTarjeta(dato , "page-blog__boton-favorito page-blog__boton-favorito--no-favorito" , true);
                    }
                   
                } 
        ).join('');

        const grilla = this.shadow.querySelector<HTMLElement>('app-grilla');
        if (!grilla) {
            return;
        }

        grilla.innerHTML = tarjetasHTML;

        this.iniciarIntersectionObserver(); 
    }

    iniciarIntersectionObserver(): void {
        if(this.observer){
            this.observer.destructor();
        }

        const opciones = {
            root: null,
            rootMargin: '0px 0px 100px 0px',
            threshold: 0
        };

        const callback: IntersectionObserverCallback = (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    const img = entrada.target as HTMLImageElement;

                    if (img.dataset.imagen) {
                        img.src = img.dataset.imagen;
                        img.removeAttribute('data-imagen');
                    }

                    this.observer?.dejarDeObservar(img);
                }

            });
        };

        this.observer = new WrapperIntersectionObserver(opciones , callback);

        const imagenesLazy = this.shadow.querySelectorAll<HTMLImageElement>('img[data-imagen]');

        imagenesLazy.forEach(img => {
            this.observer?.observar(img);
        });
    }

    iniciarMutationObserver() {
        if (this.mutationObserver) {
            this.mutationObserver.destructor();
        }

        const grilla = this.shadow.querySelector('app-grilla');

        if (!grilla) {
            return;
        }

        const opciones = {
            childList: true,
            subtree: false
        };

        const callback: MutationCallback = (listaMutaciones) => {
            listaMutaciones.forEach((mutacion) => {
                if (mutacion.type !== 'childList' || mutacion.addedNodes.length === 0) {
                    return;
                }

                mutacion.addedNodes.forEach((nodo) => {
                    if (nodo.nodeType !== Node.ELEMENT_NODE) {
                        return;
                    }

                    const elemento = nodo as Element;

                    if (!elemento.matches('app-tarjeta')) {
                        return;
                    }

                    elemento.classList.add('page-blog__tarjeta-aparecer');
                });
            });
        };

        this.mutationObserver = new WrapperMutationObserver(callback);
        this.mutationObserver.observar(grilla, opciones);
    }


    buscador(): void {
        const input = this.shadow.querySelector<HTMLInputElement>('.page-blog__input-buscar');
        const boton = this.shadow.querySelector<HTMLButtonElement>('.page-blog__boton-buscar');
        
        Buscadorinput.detectarCambio( input , boton , (texto) =>{
            this.datosFiltrados = Filtro.filtrar(this.datos, this.datosTitulo, texto );

            if(texto === ''){
                this.datosFiltrados = this.datos;
            }

            this.imprimirDatos(this.datosFiltrados);

        });

    }


    categorias(): void {
        const botonCategoria = this.shadow.querySelector<HTMLButtonElement>('.page-blog__boton-categoria');
        const blogCategorias = this.shadow.querySelector<HTMLElement>('.page-blog__categorias');

        if (!botonCategoria || !blogCategorias) {
            return;
        }

        botonCategoria.addEventListener('click', () => {

            blogCategorias.classList.toggle('page-blog__categorias--oculto');

        })

        blogCategorias.addEventListener('click', (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element) || !target.matches('p')) {
                return;
            }

            const categoria = target.textContent;
                
                if(categoria === 'Todos'){
                    this.datosFiltrados = this.datos;
                    this.imprimirDatos(this.datosFiltrados);
                    return;
                }

                this.datosFiltrados = Filtro.filtrar(this.datos , this.datosCategoria , categoria ?? "");
                this.imprimirDatos(this.datosFiltrados); 
        });



    }


    inicializarFavoritos(): void {
        const grilla = this.shadow.querySelector<HTMLElement>('app-grilla');
        if (!grilla) {
            return;
        }

        grilla.addEventListener('click', (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element)) {
                return;
            }

            const botonFavorito = target.closest('.page-blog__boton-favorito') as HTMLElement | null;
            
            if (!botonFavorito) return; 

            const tarjetaPadre = botonFavorito.closest('app-tarjeta') as HTMLElement | null;
            if (!tarjetaPadre) {
                return;
            }

            const idArticulo = tarjetaPadre.id;


            if (blogFavoritos.esFavorito(idArticulo)) {

                blogFavoritos.eliminarFavorito(idArticulo);
                
                botonFavorito.classList.replace('page-blog__boton-favorito--favorito', 'page-blog__boton-favorito--no-favorito');
                
            } else {
                blogFavoritos.agregarFavorito(idArticulo);
                
                botonFavorito.classList.replace('page-blog__boton-favorito--no-favorito', 'page-blog__boton-favorito--favorito'
                );
            }
        });
    }

}

Object.assign(PageBlog.prototype , ApiBase);

customElements.define("page-blog", PageBlog); 