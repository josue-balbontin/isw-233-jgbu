import { ApiBase } from "../../services/api/ApiBase.js";
import { tarjetaVertical } from "../../services/tarjetaFactory.js";
import { AppGrilla } from "../app-grilla/app-grilla.js";

import estiloProyecto from "./page-proyecto.css?inline" ;

const html = /*html*/`
    <section class="page-proyecto">
        <h1 class="page-proyecto__titulo">Proyectos</h1>

        <app-grilla columnas="3"></app-grilla>
        
    </section>
`;


export class PageProyecto extends HTMLElement {
    private shadow: ShadowRoot;
    private datos: any[];
    private url: string;

    obtener!: () => Promise<any[]>;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.datos = [];
        this.url = "./data/proyecto.json";
    }

    async connectedCallback() {
        this.crearHTML();

        await this.cargarDatos();

        this.imprimirProyectos();
    }

    crearHTML(): void {
        this.shadow.innerHTML = html;

        const style = document.createElement("style");
        style.innerHTML = estiloProyecto;

        this.shadow.appendChild(style);
    }

    async cargarDatos(): Promise<void> {
        this.datos = await this.obtener();
    }

    imprimirProyectos(): void {
        const grilla = this.shadow.querySelector("app-grilla");
        if (!grilla) {
            return;
        }

        const tarjetasHTML = this.datos
            .map((proyecto) => tarjetaVertical.crearTarjeta(proyecto))
            .join("");

        grilla.innerHTML = tarjetasHTML;
    }
}

Object.assign(PageProyecto.prototype, ApiBase);

customElements.define("page-proyecto", PageProyecto);