
import { WrapperResizeObserver } from "../../services/WrapperResizeObserver.js";

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
        this.resizeObserver = null;
        this.crearHTML(); 
    
    }

    connectedCallback() {
        this.iniciarResizeObserver();
        this.actualizarModoCompacto(this.getBoundingClientRect().width);
    }

    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.destructor();
            this.resizeObserver = null;
        }
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

    iniciarResizeObserver() {
        if (this.resizeObserver) {
            this.resizeObserver.destructor();
        }

        const callback = (entradas) => {
            entradas.forEach((entrada) => {
                this.actualizarModoCompacto(entrada.contentRect.width);
            });
        };

        this.resizeObserver = new WrapperResizeObserver(callback);
        this.resizeObserver.observar(this);
    }

    actualizarModoCompacto(ancho) {
        const direccion = this.getAttribute("direccion");
        const esHorizontal = direccion === "horizontal" || direccion === "horizontal-reversa";
        const activarModoCompacto = esHorizontal && ancho < 450;

        this.classList.toggle("tarjeta--compacta", activarModoCompacto);
    }



}

customElements.define("app-tarjeta", AppTarjeta);