
const html = `   <section class="sobre-mi" id="sobre-mi">
        <div class="sobre-mi__contenido">
            <div>
                <h1>Sobre Mí</h1>
                <p>Estudiante de Ingeniería de Software en la UCB con conocimientos bases  en desarrollo Backend (Spring Boot) y Frontend (Angular). Con bases en C++ y C#, me motiva entender cómo funcionan las cosas desde la base. Fuera del código, me gustan diferentes temas, desde matemáticas hasta divulgación científica, y disfruto de los videojuegos.</p>
            </div>
            <button class="boton boton--informacion sobre-mi__boton">Descargar CV</button>
        </div>
       
    </section>`;

export class SobreMi extends HTMLElement {
    constructor() {
        super();
        this.crearSobreMi(); 
    }

    crearSobreMi() {
        this.innerHTML = html;
    }

}

customElements.define('app-sobre-mi', SobreMi);