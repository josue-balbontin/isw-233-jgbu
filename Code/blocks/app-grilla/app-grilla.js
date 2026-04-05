
const templategrilla = document.createElement("template"); 

templategrilla.innerHTML= /*html*/`
    
    <div class="grilla">
        <slot></slot>
    </div>

`; 


export class AppGrilla extends HTMLElement{
    constructor(){
        super(); 
        this.DOM = this.attachShadow({mode : "open"});
    }
    

    connectedCallback(){
        this.crearHTML(); 

        const columnas = this.getAttribute("columnas") || "auto-fit";

        this.style.setProperty("--num-columnas", columnas);


    }

    crearHTML(){
        this.DOM.appendChild(templategrilla.content.cloneNode(true));

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