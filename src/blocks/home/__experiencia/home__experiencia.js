import google from './img/google.png';
import whitebelt from './img/whitebelt.png';
import inds_inspectionpng from './img/inds_inspectionpng.png';


const proyectos = /*html*/`<section class="experiencia">
        <h1 id="proyectos">Proyectos Destacados</h1>
        <div class="experiencia__lista">
            <div class="experiencia__proyecto">
                <div>
                    <h2> Aplicación de Reserva de buses</h2>
                    <p>Aplicación de gestión de flota de buses desarrollada en Python con arquitectura cliente-servidor. Implementa funcionalidades de reserva de pasajes, gestión administrativa completa (usuarios, buses, choferes, rutas), sistema de facturación con descuentos, y reportes de auditoría. El proyecto aplica buenas prácticas de bases de datos incluyendo indexación optimizada, triggers de auditoría, y gestión transaccional. Interfaz dual para administradores (CRUD completo) y clientes (reservas, historial, pagos).</p>
                </div>
                <img class="experiencia__imagen" src="img/pasa.png" alt="Captura de pantalla del Proyecto 1">
            </div>
            <div class="experiencia__proyecto">
                <img class="experiencia__imagen" src="img/arqui.png" alt="Captura de pantalla del Proyecto 2">     
                <div>
                    <h2>Simulador de Arquitectura x86</h2>
                    <p>Simulador de Arquitectura x86 desarrollado en Microsoft Excel y VBA. Implementa una arquitectura Von Neumann con pipeline de 5 etapas (IF, ID, EX, MEM, WB), detección de hazards y ejecución superpuesta. Simula una jerarquía de memoria completa (Registros, Caché multinivel con política LRU, RAM y Memoria Virtual) y soporta un conjunto de instrucciones x86-64 en sintaxis AT&T. Incluye un sistema de I/O gestionado por interrupciones y visualización en tiempo real del flujo de datos y estados del procesador.</p>
                </div> 
            </div>
            <div class="experiencia__proyecto">
                <div>
                    <h2>Plataforma de ventas y gestion de tickets de eventos </h2>
                    <p>Sistema integral de gestión de eventos y venta de entradas desarrollado con <strong>Java (Spring Boot)</strong> y <strong>Angular</strong>. Arquitectura N-Capas diseñada bajo principios <strong>SOLID</strong>, implementando patrones de diseño avanzados como <strong>Observer</strong> para el manejo de concurrencia en reservas temporales (bloqueo de asientos) , <strong>State</strong> para el ciclo de vida del ticket y <strong>Template Method</strong> para la estandarización de repositorios. Incluye validación de acceso mediante códigos QR, facturación dinámica y reportes de ventas en tiempo real.</p>
                </div>
                <img class="experiencia__imagen" src="img/tickets.png" alt="Captura de pantalla del Proyecto 3">
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
                    <p>Implementación de pipelines de visión por computadora para la inspección visual automatizada, aplicando técnicas de Transfer Learning para mejorar la precisión en la identificación de fallas de manufactura.</p>
                </div>
                <img class="experiencia__imagen" src="${inds_inspectionpng}" alt="Captura de pantalla del Proyecto 1">
            </div>
            <div class="experiencia__proyecto">
                <img class="experiencia__imagen" src="${whitebelt}" alt="Captura de pantalla del Proyecto 2">     
                <div>
                    <h2>Lean Six Sigma White Belt</h2>
                    <p>Comprensión de los fundamentos de la metodología Lean Six Sigma y el marco DMAIC para la identificación de desperdicios, variabilidad y mejora de procesos operativos.</p>
                </div> 
            </div>
            <div class="experiencia__proyecto">
                <div>
                    <h2>Google IA SUMMIT for Education</h2>
                    <p>Participación en la conferencia internacional sobre la integración de la Inteligencia Artificial en entornos educativos, abordando el uso responsable, los desafíos éticos y estrategias sostenibles bajo la guía de Google Certified Trainers.</p>
                </div>
                <img class="experiencia__imagen" src="${google}" alt="Captura de pantalla del Proyecto 3">
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