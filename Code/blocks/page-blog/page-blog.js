import { ApiBase } from "../../services/api/ApiBase.js";
import { AppGrilla } from "../app-grilla/app-grilla.js";
import { AppTarjeta } from "../app-tarjeta/app-tarjeta.js";
import { tarjetaHorizontal, tarjetaVertical, tarjetaVerticalFavorito } from "../../services/tarjetaFactory.js";

import { Buscadorinput } from "../../services/buscadorInput.js";
import { Filtro } from "../../services/Filtro.js";
import { blogFavoritos } from "../../services/BlogFavoritos.js";
import { WrapperIntersectionObserver } from "../../services/WrapperIntersationObserver.js";

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
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open"});
        
        this.datos = [];
        this.datosFiltrados = [];
        this.categoriasvalores = [];

        this.datosTitulo = "titulo";
        this.datosCategoria="categoria"; 
        
        this.url = './data/blog.json';

        this.observer = null;
        
    }

    async connectedCallback(){
            
        this.crearHTML();
    
        await this.cargarDatos(); 

        this.inicializarCategorias(); 

        this.imprimirDatos(this.datos);
 
        this.buscador(); 

        this.categorias(); 

        this.inicializarFavoritos(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        fetch ('/blocks/page-blog/page-blog.css').then(
            response => response.text().then(
                css => style.innerHTML = css
            )
        );

        this.shadow.appendChild(style);

    }


    async cargarDatos(){
        this.datos = await this.obtener();
        
        this.categoriasvalores = Filtro.obtenerValoresUnicos(this.datos , this.datosCategoria);
        
    }

    inicializarCategorias(){
        const blogCategorias = this.shadow.querySelector('.page-blog__categorias')

        const opcionesHTML = this.categoriasvalores.map(elemento =>{
                     return `<p>${elemento}</p>`;
        }).join('');

        blogCategorias.innerHTML = `<p>Todos</p>` + opcionesHTML;

    }

    imprimirDatos(datos){
        
        const tarjetasHTML = datos.map(
                dato =>{
                    if(blogFavoritos.esFavorito(dato.id)){
                        return tarjetaVerticalFavorito.crearTarjeta(dato , " page-blog__boton-favorito page-blog__boton-favorito--favorito" , true);
                    }
                    else{
                         return tarjetaVerticalFavorito.crearTarjeta(dato , "page-blog__boton-favorito page-blog__boton-favorito--no-favorito" , true);
                    }
                   
                } 
        ).join('');

        this.shadow.querySelector('app-grilla').innerHTML = tarjetasHTML;

        this.iniciarIntersectionObserver(); 
    }

    iniciarIntersectionObserver(){
        if(this.observer){
            this.observer.destructor();
        }

        const opciones = {
            root: null,
            rootMargin: '0px 0px 200px 0px',
            threshold: 0
        };

        const callback = (entradas) =>{
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    const img = entrada.target; 

                    if (img.dataset.imagen) {
                        img.src = img.dataset.imagen;
                        img.removeAttribute('data-imagen');
                    }

                    this.observer.dejarDeObservar(img);
                }

            });
        };

        this.observer = new WrapperIntersectionObserver(opciones , callback);

        const imagenesLazy = this.shadow.querySelectorAll('img[data-imagen]');

        imagenesLazy.forEach(img => {
            this.observer.observar(img);
        });
    }


    buscador(){
        const input = this.shadow.querySelector('.page-blog__input-buscar');
        const boton = this.shadow.querySelector('.page-blog__boton-buscar');
        
        Buscadorinput.detectarCambio( input , boton , (texto) =>{
            this.datosFiltrados = Filtro.filtrar(this.datos, this.datosTitulo, texto );

            if(texto === ''){
                this.datosFiltrados = this.datos;
            }

            this.imprimirDatos(this.datosFiltrados);

        });

    }


    categorias(){
        const botonCategoria = this.shadow.querySelector('.page-blog__boton-categoria');
        const blogCategorias = this.shadow.querySelector('.page-blog__categorias')

        botonCategoria.addEventListener('click', () => {

            blogCategorias.classList.toggle('page-blog__categorias--oculto');

        })

        blogCategorias.addEventListener('click' ,   (event)=> {
            if(event.target.matches('p')){
                const categoria =event.target.textContent;
                
                if(categoria === 'Todos'){
                    this.datosFiltrados = this.datos;
                    this.imprimirDatos(this.datosFiltrados);
                    return;
                }

                this.datosFiltrados = Filtro.filtrar(this.datos , this.datosCategoria , categoria );
                this.imprimirDatos(this.datosFiltrados); 

            }

           
        })



    }


    inicializarFavoritos() {
    const grilla = this.shadow.querySelector('app-grilla');

        grilla.addEventListener('click', (event) => {
            
            const botonFavorito = event.target.closest('.page-blog__boton-favorito'); 
            
            if (!botonFavorito) return; 

            const tarjetaPadre = botonFavorito.closest('app-tarjeta');
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