import estiloContacto from "./page-contacto.css?inline";

const html= /*html*/`
    <section class="page-contacto">
        <h1 class="page-contacto__titulo">Contacto</h1>
        
        <h3 class="page-contacto__titulo-input" >Nombre:</h3>
        <input type="text">

        <h3 class="page-contacto__titulo-input">Correo:</h3>
        <input type="email">

        <h3 class="page-contacto__titulo-input">Mensaje:</h3>
        <textarea name="" id="" ></textarea>

        
        <button>Enviar</button>

    </section>

`; 

export class PageContacto extends HTMLElement{
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open"});
        this.crearHTML(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        style.innerHTML = estiloContacto;

        this.shadow.appendChild(style);
    }

}

customElements.define("page-contacto", PageContacto); 