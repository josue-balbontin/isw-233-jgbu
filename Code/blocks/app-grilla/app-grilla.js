
const html = /*html*/`
    <div class="grilla">
        <slot></slot>
    </div>

`; 


class AppGrilla extends HTMLElement{
    constructor(){
        super(); 
        this.DOM = this.attachShadow({mode : "open"});
        this.crearHTML();
    }

    crearHTML(){
        this.DOM.innerHTML = html;

        const style = document.createElement("style"); 

        fetch().then(
            respuesta => respuesta.text().then(
                estilo => style.innerHTML = estilo
            )
        )

        this.DOM.appendChild(style);

    }

}

customElements.define("app-grilla", AppGrilla);