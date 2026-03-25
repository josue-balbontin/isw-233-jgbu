
const templateTarjeta = document.createElement('template');

templateTarjeta.innerHTML =/*html*/`
    <article class = "tarjeta">
        <div class= "tarjeta__imagen">
            <slot name="imagen"></slot>
        </div>
        
        <div class= "tarjeta__contenido">
            <slot name= "contenido"></slot>

            <div class="acciones">
                <slot name="acciones"></slot>
            </div>

        </div>

        
    
    </article>


`;

export class AppTarjeta extends HTMLElement {
    constructor(){
        super(); 
        this.DOM = this.attachShadow({mode : "open"});
        this.crearHTML(); 
    
    }

    crearHTML(){
        this.DOM.appendChild(templateTarjeta.content.cloneNode(true));

        const style = document.createElement("style");

        fetch ('/blocks/app-tarjeta/app-tarjeta.css').then(
            respuesta => respuesta.text().then(
                css => style.innerHTML = css             
            )
        );

        this.DOM.appendChild(style);



    }



}

customElements.define("app-tarjeta", AppTarjeta);