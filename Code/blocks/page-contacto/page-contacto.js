
const html= /*html*/`
    <section class="page-contacto">
        <h1>Contacto</h1>
        
        <h3>Nombre:</h3>
        <input type="text">

        <h3>Correo:</h3>
        <input type="email">

        <h3>Mensaje:</h3>
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
  
        fetch ('/blocks/page-contacto/page-contacto.css').then(
            response => response.text().then(
                css => style.innerHTML = css
            )
        );

        this.shadow.appendChild(style);
    }

}

customElements.define("page-contacto", PageContacto); 