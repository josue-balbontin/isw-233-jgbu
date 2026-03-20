import { AppTarjeta } from "../../app-tarjeta/app-tarjeta.js";

const html =/*html*/`
  <section class="blog">
        <h1 id="blog">Blog</h1>
            <div class="blog__lista">
                <app-tarjeta>
                    <img slot="imagen" src="img/iamed.webp"> 
                    <div slot="contenido">
                        <h2></h2>
                        <p></p>
                    </div>
                </app-tarjeta>

                <app-tarjeta>
                    <img slot="imagen" src="img/patrones.png">
                    <div slot="contenido">
                        <h2></h2>
                        <p></p>
                    </div>
                </app-tarjeta>

                <app-tarjeta>
                    <img slot="imagen" src="img/x86.webp" >
                    <div slot="contenido">
                        <h2></h2>
                        <p></p>
                    </div>
                </app-tarjeta>

        
            </div>
        <button class="boton boton--informacion">Ver Blog</button>
    </section>
  
`;


export class Blog extends HTMLElement {
    constructor() {
        super();
        this.crearBlog();
    }

    crearBlog() {
        this.innerHTML = html;
    }

}

customElements.define('app-blog', Blog);



