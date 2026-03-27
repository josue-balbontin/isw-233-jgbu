import { AppGrilla } from "../app-grilla/app-grilla.js";

const html = /*html*/`
    <section class="page-proyecto">
        <h1 class="page-proyecto__titulo">Proyectos</h1>

        <app-grilla columnas="3"></app-grilla>
        
    </section>
`;


export class PageProyecto extends HTMLElement {
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open" });
        this.datos = []; 

    }

    connectedCallback(){
        this.crearHTML(); 

        this.imprimirProyectos(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        fetch ('/blocks/page-proyecto/page-proyecto.css').then(
            response => response.text().then(
                css => style.innerHTML = css
            )
        );

        this.shadow.appendChild(style);
    }

    imprimirProyectos(){
        const grilla = this.shadow.querySelector("app-grilla");


    }

}

customElements.define("page-proyecto", PageProyecto);