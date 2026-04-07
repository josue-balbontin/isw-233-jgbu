import imgPasa from '../../../img/pasa.png';
import imgArqui from '../../../img/arqui.png';
import imgTickets from '../../../img/tickets.png';

import imgInspection from './img/inds_inspectionpng.png';
import imgWhitebelt from './img/whitebelt.png';
import imgGoogle from './img/google.png';


const proyectos = /*html*/`<section class="experiencia">
        <h1 id="proyectos">Proyectos Destacados</h1>
        <div class="experiencia__lista">
            <div class="experiencia__proyecto">
                <div>
                    <h2>Aplicación de Reserva de buses</h2>
                    <p>Aplicación de gestión de flota de buses desarrollada en Python...</p>
                </div>
                <img class="experiencia__imagen" src="${imgPasa}" alt="Captura de pantalla del Proyecto 1">
            </div>
            
            <div class="experiencia__proyecto">
                <img class="experiencia__imagen" src="${imgArqui}" alt="Captura de pantalla del Proyecto 2">     
                <div>
                    <h2>Simulador de Arquitectura x86</h2>
                    <p>Simulador de Arquitectura x86 desarrollado en Microsoft Excel...</p>
                </div> 
            </div>

            <div class="experiencia__proyecto">
                <div>
                    <h2>Plataforma de ventas y gestion de tickets de eventos</h2>
                    <p>Sistema integral de gestión de eventos y venta de entradas desarrollado...</p>
                </div>
                <img class="experiencia__imagen" src="${imgTickets}" alt="Captura de pantalla del Proyecto 3">
            </div>
            <button class="boton boton--informacion">Ver más proyectos</button>
        </div>
    </section>`;

const experiencia = /*html*/`<section class="experiencia">
        <h1 id="certificados">Certificados</h1>
        <div class="experiencia__lista">
            <div class="experiencia__proyecto">
                <div>
                    <h2>Computer Vision for Industrial Inspection</h2>
                    <p>Implementación de pipelines de visión por computadora...</p>
                </div>
                <img class="experiencia__imagen" src="${imgInspection}" alt="Certificado 1">
            </div>
            
            <div class="experiencia__proyecto">
                <img class="experiencia__imagen" src="${imgWhitebelt}" alt="Certificado 2">     
                <div>
                    <h2>Lean Six Sigma White Belt</h2>
                    <p>Comprensión de los fundamentos de la metodología Lean Six Sigma...</p>
                </div> 
            </div>

            <div class="experiencia__proyecto">
                <div>
                    <h2>Google IA SUMMIT for Education</h2>
                    <p>Participación en la conferencia internacional sobre la integración de la IA...</p>
                </div>
                <img class="experiencia__imagen" src="${imgGoogle}" alt="Certificado 3">
            </div>
            <button class="boton boton--informacion">Ver más certificados</button>
        </div>
    </section>`;


export class Experiencia extends HTMLElement {
    constructor() {
        super();
        this.crearExperiencia();
    }

    crearExperiencia() {
        this.innerHTML = proyectos + experiencia;
    }

}

customElements.define('app-experiencia', Experiencia);