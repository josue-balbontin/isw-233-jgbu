
const html =`  <section class="blog">
        <h1 id="blog">Blog</h1>
        <div class="blog__lista">
            <div class="blog__proyecto">
                  <img class="blog__imagen" src="img/iamed.webp" alt="Captura de pantalla del Proyecto 1">
                <div>
                    <h2>Perspectiva legal, ética y tecnológica de la IA en el área de salud. Basado en un enfoque mixto.</h2>
                    <p>Artículo de investigación que analiza la integración de la <strong>Inteligencia Artificial en el sector salud</strong> mediante un enfoque metodológico mixto. Explora las implicaciones de esta tecnología desde una perspectiva tridimensional: <strong>tecnológica, legal y ética</strong>. El estudio evalúa el impacto de los algoritmos en el entorno clínico, los desafíos regulatorios frente a la privacidad de datos de los pacientes y propone lineamientos para una adopción responsable, equitativa y segura de la IA en la medicina.</p>
                </div>
              
            </div>
            <div class="blog__proyecto">
                 <img  class="blog__imagen"  src="img/patrones.png" alt="Captura de pantalla del Proyecto 2">   
                <div>
                    <h2>Arquitectura Limpia: Resolviendo la Concurrencia con Patrones de Diseño</h2>
                    <p>Análisis sobre la aplicación de principios de Arquitectura Limpia en sistemas transaccionales críticos. A través del diseño de un motor de reservas, exploro cómo la implementación estricta de <strong>SOLID</strong> y patrones como <strong>Observer</strong> y <strong>State</strong>  eliminan la deuda técnica en el manejo de concurrencia. El artículo discute la importancia de desacoplar la lógica de negocio de la infraestructura, permitiendo construir un backend en Spring Boot mantenible, testeable y escalable frente a reglas de negocio complejas como el bloqueo temporal de recursos.</p>
                </div> 
                   
            </div>
            <div class="blog__proyecto">
                <img  class="blog__imagen"  src="img/x86.webp" alt="Captura de pantalla del Proyecto 3">
                <div>
                    <h2>Entendiendo la Máquina: Una Inmersión en el Pipeline y la Arquitectura x86</h2>
                    <p>Desmitificando el procesador: una inmersión técnica en la emulación del ciclo de instrucción y la arquitectura <strong>Von Neumann</strong>. Este post detalla los desafíos de simular un pipeline de 5 etapas (Fetch, Decode, Execute, Memory, WriteBack) y la resolución de conflictos de datos (<em>hazards</em>) en tiempo real. Se reflexiona sobre cómo comprender la jerarquía de memoria y el manejo de registros es crucial para cualquier ingeniero de software que busque escribir código optimizado, eficiente y consciente del hardware subyacente.</p>
                </div>
                
            </div>
        
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