
import { WrapperResizeObserver } from "../../services/WrapperResizeObserver";

import estilosTarjeta from './app-tarjeta.css?inline';

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
    private DOM: ShadowRoot;
    private resizeObserver: WrapperResizeObserver | null;

    constructor() {
        super();
        this.DOM = this.attachShadow({ mode: "open" });
        this.resizeObserver = null;
        this.crearHTML();
    }

    connectedCallback(): void {
        this.iniciarResizeObserver();
        this.actualizarModoCompacto(this.getBoundingClientRect().width);
    }

    disconnectedCallback(): void {
        if (this.resizeObserver) {
            this.resizeObserver.destructor();
            this.resizeObserver = null;
        }
    }

    crearHTML(): void {
        this.DOM.appendChild(templateTarjeta.content.cloneNode(true));

        const style = document.createElement("style");

        style.innerHTML = estilosTarjeta;

        this.DOM.appendChild(style);



    }

    iniciarResizeObserver(): void {
        if (this.resizeObserver) {
            this.resizeObserver.destructor();
        }

        const callback: ResizeObserverCallback = (entradas) => {
            entradas.forEach((entrada) => {
                this.actualizarModoCompacto(entrada.contentRect.width);
            });
        };

        this.resizeObserver = new WrapperResizeObserver(callback);
        this.resizeObserver.observar(this);
    }

    actualizarModoCompacto(ancho: number): void {
        const direccion = this.getAttribute("direccion");
        const esHorizontal = direccion === "horizontal" || direccion === "horizontal-reversa";
        const activarModoCompacto = esHorizontal && ancho < 450;

        this.classList.toggle("tarjeta--compacta", activarModoCompacto);
    }



}

customElements.define("app-tarjeta", AppTarjeta);