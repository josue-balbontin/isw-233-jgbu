import { AppTarjeta } from "../../app-tarjeta/app-tarjeta.js";
import { ApiBase } from "../../../services/api/ApiBase.js";
import { tarjetaVertical } from "../../../services/tarjetaFactory.js";

const html =/*html*/`
  <section class="blog">
        <h1 id="blog">Blog</h1>
            <div class="blog__lista">
  
        
            </div>
        <button class="boton boton--informacion">Ver Blog</button>
    </section>
  
`;


export class Blog extends HTMLElement {
    constructor() {
        super();
        this.url = './data/blog.json';
        
    }

    async connectedCallback(){
        
        this.crearBlog();

    
        const blogData = await this.obtener();
            
        const tarjetasHTML = blogData.slice(0, 3).map(element => {
            return tarjetaVertical.crearTarjeta(element);
        }).join('');

            this.querySelector('.blog__lista').innerHTML = tarjetasHTML;
        
    
    }

    crearBlog() {
        this.innerHTML = html;
    }
    

}


Object.assign(Blog.prototype, ApiBase);

customElements.define('app-blog', Blog);



