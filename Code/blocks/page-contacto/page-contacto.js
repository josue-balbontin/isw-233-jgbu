
const html= `<h1>hola contacto</h1>`; 

export class PageContacto extends HTMLElement{
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open"});
        this.crearHTML(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
    }

}

customElements.define("page-contacto", PageContacto); 