import { AppTarjeta } from "../app-tarjeta/app-tarjeta";

import estiloAbout from "./page-about.css?inline";

const html =/*html*/`
    <section class = "page-about">

        <app-tarjeta class="page-about__contenedor" direccion="horizontal">
            <div class="page-about__perfil" slot="imagen">
                <app-tarjeta>
                    <img class="page-about__imagen" slot="imagen" src="img/FotoPerfil.png" alt="Foto de Perfil">
                    <div class="page-about__contenido-imagen" slot="contenido">
                        <h3 class="page-about__nombre">Josue Balbontin</h3>
                        <p class="page-about__texto-imagen">numero : +591 75041970</p>
                        <p class="page-about__texto-imagen">correo : josuebalbontin@gmail.com</p>
                        <p class="page-about__texto-imagen">linkedin : www.linkedin.com/in/josue-galo-balbontin-ugarteche-50149436b</p>

                    </div>
                </app-tarjeta>
            </div>
            <div slot="contenido" class="page-about__contenido">
                <h1 class="page-about__titulo">Sobre Mi</h1>
                <p class="page-about__texto">Estudiante de Ingeniería de Software en la UCB con conocimientos bases  en desarrollo Backend (Spring Boot) y Frontend (Angular). Con bases en C++ y C#, me motiva entender cómo funcionan las cosas desde la base. Fuera del código, me gustan diferentes temas, desde matemáticas hasta divulgación científica, y disfruto de los videojuegos.</p>
            </div>


        </app-tarjeta>

    </section>

`;


export class PageAbout extends HTMLElement {
    private shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.crearHtml();
    }

    crearHtml(): void {
        this.shadow.innerHTML = html;

        const style = document.createElement("style");
        style.innerHTML = estiloAbout;

        this.shadow.appendChild(style);
    }
}

customElements.define("page-about", PageAbout);