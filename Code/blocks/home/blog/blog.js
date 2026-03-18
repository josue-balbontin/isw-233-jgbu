import { AppTarjeta } from "../../app-tarjeta/app-tarjeta.js";

const html =/*html*/`
  <section class="blog">
        <h1 id="blog">Blog</h1>
            <div class="blog__lista">
                <app-tarjeta>
                    <img slot="imagen" src="img/iamed.webp"> 
                    <div slot="contenido">
                        <h2>Perspectiva legal, ética y tecnológica de la IA en el área de salud. Basado en un enfoque mixto.</h2>
                        <p>Este artículo de investigación analiza cómo la <strong>Inteligencia Artificial se integra en el sector salud</strong> a través de un enfoque metodológico mixto. El trabajo aborda las implicaciones de esta tecnología desde tres dimensiones: <strong>tecnológica, legal y ética</strong>. Se evalúa el impacto de los algoritmos en la práctica clínica, los retos regulatorios relacionados con la privacidad de los datos de los pacientes y se plantean lineamientos para una adopción responsable, equitativa y segura de la IA en la medicina.</p>
                    </div>
                </app-tarjeta>

                <app-tarjeta>
                    <img slot="imagen" src="img/patrones.png">
                    <div slot="contenido">
                        <h2>Arquitectura Limpia: Resolviendo la Concurrencia con Patrones de Diseño</h2>
                        <p>Este análisis aborda la aplicación de principios de <strong>Arquitectura Limpia</strong> en sistemas transaccionales críticos. A partir del diseño de un motor de reservas, muestro cómo la implementación rigurosa de <strong>SOLID</strong> y patrones como <strong>Observer</strong> y <strong>State</strong> ayudan a eliminar la deuda técnica en el manejo de concurrencia. Se discute la relevancia de desacoplar la lógica de negocio de la infraestructura, lo que permite construir un backend en Spring Boot mantenible, testeable y escalable frente a reglas de negocio complejas, como el bloqueo temporal de recursos.</p>
                    </div>
                </app-tarjeta>

                <app-tarjeta>
                    <img slot="imagen" src="img/x86.webp" >
                    <div slot="contenido">
                        <h2>Entendiendo la Máquina: Una Inmersión en el Pipeline y la Arquitectura x86</h2>
                        <p>Este trabajo desmitifica el procesador a través de una inmersión técnica en la emulación del ciclo de instrucción y la arquitectura <strong>Von Neumann</strong>. Presento los desafíos de simular un pipeline de 5 etapas (Fetch, Decode, Execute, Memory, WriteBack) y la resolución de <em>hazards</em> en tiempo real. Se reflexiona sobre cómo comprender la jerarquía de memoria y el manejo de registros resulta esencial para cualquier ingeniero de software que aspire a escribir código optimizado, eficiente y consciente del hardware subyacente.</p>
                    </div>
                </app-tarjeta>

        
            </div>
        <button class="boton boton--informacion">Ver Blog</button>
    </section>
  
`;


export class Blog extends HTMLElement {
    constructor() {
        super();
        this.crearBlog();
    }

    crearBlog() {
        this.innerHTML = html;
    }

}

customElements.define('app-blog', Blog);



