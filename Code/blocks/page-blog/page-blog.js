import { ApiBase } from "../../services/api/ApiBase.js";
import { AppGrilla } from "../app-grilla/app-grilla.js";
import { AppTarjeta } from "../app-tarjeta/app-tarjeta.js";
import { tarjetaHorizontal, tarjetaVertical, tarjetaVerticalFavorito } from "../../services/tarjetaFactory.js";

import { Buscadorinput } from "../../services/buscadorInput.js";

const html = /*html*/` 
    <section class = "page-blog">
        <h1 class="page-blog__titulo">Blog </h1>
        
        <div class= "page-blog__buscador">
            <input type="text" placeholder="Buscar blog" class="page-blog__input-buscar"><button class="page-blog__boton-categoria">categoria</button>
            <button class="page-blog__boton-buscar">Buscar</button>
        </div>
        

        <app-grilla columnas="3"></app-grilla>
        
    
    </section>
`;


export class PageBlog extends HTMLElement {
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open"});
        
        this.url = './data/blog.json';
        
    }

    async connectedCallback(){
            
        this.crearHTML();
    
        
        this.imprimirDatos(); 

        Buscadorinput.detectarCambio(this.shadow.querySelector('.page-blog__input-buscar') , this.shadow.querySelector('.page-blog__boton-buscar') );
            
        
    }

    async imprimirDatos(){
        const blogData = await this.obtener();
                
        const tarjetasHTML = blogData.map(element => {
            return tarjetaVertical.crearTarjeta(element);
        }).join('');
    
        this.shadow.querySelector('app-grilla').innerHTML = tarjetasHTML;
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




}

Object.assign(PageBlog.prototype , ApiBase);

customElements.define("page-blog", PageBlog); 