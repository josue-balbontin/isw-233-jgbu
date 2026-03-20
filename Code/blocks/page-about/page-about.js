
const html =`<h1> hola`;


export class PageAbout extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.crearHtml(); 
        
        
    }

    crearHtml(){
        
        this.shadow.innerHTML = html;
    }



}

customElements.define("page-about", PageAbout)