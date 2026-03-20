
const html = /*html*/`
    <div class="grilla">
        <slot></slot>
    </div>

`; 


export class AppGrilla extends HTMLElement{
    constructor(){
        super(); 
        this.DOM = this.attachShadow({mode : "open"});
        this.crearHTML();
    }

    crearHTML(){
        this.DOM.innerHTML = html;

        const style = document.createElement("style"); 

        fetch('/blocks/app-grilla/app-grilla.css').then(
            respuesta => respuesta.text().then(
                estilo => style.innerHTML = estilo
            )
        )

        this.DOM.appendChild(style);

    }

}

customElements.define("app-grilla", AppGrilla);