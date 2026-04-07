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
    private url: string;
    obtener!: () => Promise<Array<Record<string, any>>>;

    constructor() {
        super();
        this.url = './data/blog.json';
    }

    async connectedCallback(): Promise<void> {
        this.crearBlog();

        const blogData = await this.obtener();
        const tarjetasHTML = blogData.slice(0, 3).map((element) => {
            return tarjetaVertical.crearTarjeta(element);
        }).join('');

        const lista = this.querySelector<HTMLElement>('.blog__lista');
        if (lista) {
            lista.innerHTML = tarjetasHTML;
        }
    }

    crearBlog(): void {
        this.innerHTML = html;
    }
    

}


Object.assign(Blog.prototype, ApiBase);

customElements.define('app-blog', Blog);



