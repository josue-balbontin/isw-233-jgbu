
const html = `<h1>hola proyecto</h1>`;


export class PageProyecto extends HTMLElement {
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open" });
        this.crearHTML(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
    }

}

customElements.define("page-proyecto", PageProyecto);