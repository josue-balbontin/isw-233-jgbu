import { AppTarjeta } from "../app-tarjeta/app-tarjeta.js";


const html =/*html*/`
    <section class = "page-about">

        <app-tarjeta direccion="horizontal">
            <div slot="imagen">
                <app-tarjeta>
                    <img slot="imagen" src="https://img.freepik.com/psd-gratis/icono-archivo-jpg-rojo-formato-archivo-imagen-renderizado-3d_84443-57044.jpg?semt=ais_hybrid&w=740&q=80" alt="Foto de Perfil">
                    <div slot="contenido">
                        <h3>Josue Balbontin</h3>
                        <p>numero : +591 75041970</p>
                        <p>correo : josuebalbontin@gmail.com</p>
                        <p>linkedin : www.linkedin.com/in/josue-galo-balbontin-ugarteche-50149436b</p>

                    </div>
                </app-tarjeta>
            </div>
            <div slot="contenido">
                <h1>Sobre Mi</h1>
                <p>Estudiante de Ingeniería de Software en la UCB con conocimientos bases  en desarrollo Backend (Spring Boot) y Frontend (Angular). Con bases en C++ y C#, me motiva entender cómo funcionan las cosas desde la base. Fuera del código, me gustan diferentes temas, desde matemáticas hasta divulgación científica, y disfruto de los videojuegos.</p>
            </div>


        </app-tarjeta>

    </section>

`;


export class PageAbout extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.crearHtml(); 
        
        
    }

    crearHtml(){
       this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        fetch ('/blocks/page-about/page-about.css').then(
            response => response.text().then(
                css => style.innerHTML = css
            )
        );

        this.shadow.appendChild(style);
    }



}

customElements.define("page-about", PageAbout)