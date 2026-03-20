import { ApiBase } from "../../services/api/ApiBase.js";
import { AppGrilla } from "../app-grilla/app-grilla.js";
import { AppTarjeta } from "../app-tarjeta/app-tarjeta.js";
import { tarjetaVerticalFavorito } from "../../services/tarjetaFactory.js";

const html = /*html*/` 
    <section class = "page-blog">
        <h1>Blog </h1>
        
        <div class= "page-blog__buscador">
            <input type="text" placeholder="Buscar blog"><button>categoria</button>
        </div>

        <app-grilla></app-grilla>
        
    
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
    
        
        const blogData = await this.obtener();
                
        const tarjetasHTML = blogData.map(element => {
            return tarjetaVerticalFavorito.crearTarjeta(element);
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