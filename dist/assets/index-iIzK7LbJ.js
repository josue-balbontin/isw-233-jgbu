(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
    <section class="presentacion">
        <div class="presentacion__informacion">
            <h1 class="presentacion__titulo">Ingeniero en Software</h1>
            <h2>Josue Balbontin</h2>
            <h3>Desarollador Full Stack</h3>
            
            <button class="boton boton--principal presentacion__boton"><p>Contáctame</p></button>
        </div>

        <div class="presentacion__imagenes">
            <img class="presentacion__perfil" src="./img/FotoPerfil.png" alt="Foto de perfil">
            
            <div class="presentacion__redes">
                <a href="mailto:josuebalbontin@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <img src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M50%209.375V40.625C50%2042.3984%2048.6484%2043.75%2046.875%2043.75H43.75V15.3891L25%2028.8578L6.25%2015.3891V43.75H3.125C1.35156%2043.75%200%2042.3984%200%2040.625V9.375C0%208.4875%200.334375%207.70625%200.895313%207.15312C1.1873%206.8606%201.5352%206.62988%201.91828%206.47472C2.30135%206.31956%202.71175%206.24313%203.125%206.25H4.16719L25%2021.3547L45.8328%206.25H46.875C47.7625%206.25%2048.5438%206.58437%2049.1047%207.15312C49.6656%207.70625%2050%208.4875%2050%209.375Z'%20fill='white'/%3e%3c/svg%3e" alt="Gmail">
                </a>
                <a href="https://www.linkedin.com/in/josue-galo-balbontin-ugarteche-50149436b/" target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_24_80)'%3e%3crect%20width='50'%20height='50'%20rx='25'%20fill='%23FFF9F9'/%3e%3cpath%20d='M9.80362%200.0125122C4.41777%200.0125122%200.00976562%204.42041%200.00976562%209.80636V40.1984C0.00976562%2045.5843%204.41767%2049.9907%209.80362%2049.9907H40.1957C45.5816%2049.9907%2049.9879%2045.5843%2049.9879%2040.1984V9.80636C49.9879%204.42051%2045.5816%200.0125122%2040.1957%200.0125122H9.80362ZM12.2669%208.25991C14.8493%208.25991%2016.44%209.95521%2016.4891%2012.1837C16.4891%2014.3629%2014.8492%2016.1059%2012.217%2016.1059H12.1685C9.63527%2016.1059%207.99792%2014.363%207.99792%2012.1837C7.99792%209.95526%209.68482%208.25991%2012.2669%208.25991H12.2669ZM34.5209%2018.6754C39.4874%2018.6754%2043.2104%2021.9215%2043.2104%2028.8972V41.9197H35.6628V29.7703C35.6628%2026.7173%2034.5704%2024.6344%2031.839%2024.6344C29.7538%2024.6344%2028.5109%2026.0383%2027.9652%2027.3945C27.7658%2027.8797%2027.7168%2028.5574%2027.7168%2029.2361V41.9197H20.1692C20.1692%2041.9197%2020.2682%2021.339%2020.1692%2019.208H27.7184V22.4242C28.7214%2020.8767%2030.5155%2018.6754%2034.5209%2018.6754V18.6754ZM8.44312%2019.2097H15.9908V41.9198H8.44312V19.2097Z'%20fill='%23252525'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_24_80'%3e%3crect%20width='50'%20height='50'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="LinkedIn">
                </a>
                <a href="https://github.com/josue-balbontin" target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3csvg%20width='51'%20height='50'%20viewBox='0%200%2051%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.5%200C22.1513%200%2018.8354%200.662698%2015.7416%201.95026C12.6478%203.23782%209.83667%205.12502%207.46878%207.50412C2.6866%2012.3089%200%2018.8256%200%2025.6207C0%2036.945%207.3185%2046.5528%2017.442%2049.9603C18.717%2050.1653%2019.125%2049.371%2019.125%2048.6793V44.3494C12.0615%2045.8866%2010.557%2040.9162%2010.557%2040.9162C9.384%2037.9442%207.7265%2037.15%207.7265%2037.15C5.406%2035.5615%207.905%2035.6127%207.905%2035.6127C10.455%2035.7921%2011.8065%2038.2517%2011.8065%2038.2517C14.025%2042.146%2017.7735%2040.9931%2019.227%2040.3782C19.4565%2038.7128%2020.1195%2037.5855%2020.8335%2036.945C15.1725%2036.3045%209.231%2034.1011%209.231%2024.3396C9.231%2021.4957%2010.2%2019.2155%2011.8575%2017.3964C11.6025%2016.7559%2010.71%2014.0914%2012.1125%2010.6326C12.1125%2010.6326%2014.2545%209.94082%2019.125%2013.2459C21.1395%2012.6822%2023.3325%2012.4004%2025.5%2012.4004C27.6675%2012.4004%2029.8605%2012.6822%2031.875%2013.2459C36.7455%209.94082%2038.8875%2010.6326%2038.8875%2010.6326C40.29%2014.0914%2039.3975%2016.7559%2039.1425%2017.3964C40.8%2019.2155%2041.769%2021.4957%2041.769%2024.3396C41.769%2034.1267%2035.802%2036.2789%2030.1155%2036.9194C31.0335%2037.7136%2031.875%2039.2765%2031.875%2041.6592V48.6793C31.875%2049.371%2032.283%2050.1909%2033.5835%2049.9603C43.707%2046.5271%2051%2036.945%2051%2025.6207C51%2022.2561%2050.3404%2018.9245%2049.0589%2015.8161C47.7774%2012.7076%2045.8991%209.88322%2043.5312%207.50412C41.1633%205.12502%2038.3522%203.23782%2035.2584%201.95026C32.1646%200.662698%2028.8487%200%2025.5%200Z'%20fill='white'/%3e%3c/svg%3e" alt="GitHub">
                </a>
            </div>
        </div>
    </section>
`,t=class extends HTMLElement{constructor(){super(),this.crearPresentacion()}crearPresentacion(){this.innerHTML=e}};customElements.define(`app-presentacion`,t);var n=`   <section class="sobre-mi" id="sobre-mi">
        <div class="sobre-mi__contenido">
            <div>
                <h1>Sobre Mí</h1>
                <p>Estudiante de Ingeniería de Software en la UCB con conocimientos bases  en desarrollo Backend (Spring Boot) y Frontend (Angular). Con bases en C++ y C#, me motiva entender cómo funcionan las cosas desde la base. Fuera del código, me gustan diferentes temas, desde matemáticas hasta divulgación científica, y disfruto de los videojuegos.</p>
            </div>
            <button class="boton boton--informacion sobre-mi__boton">Descargar CV</button>
        </div>
       
    </section>`,r=class extends HTMLElement{constructor(){super(),this.crearSobreMi()}crearSobreMi(){this.innerHTML=n}};customElements.define(`app-sobre-mi`,r);var i=class{constructor(e){this.callback=e,this.observer=new ResizeObserver(this.callback)}observar(e){e&&this.observer.observe(e)}dejarDeObservar(e){e&&this.observer.unobserve(e)}destructor(){this.observer&&this.observer.disconnect()}},a=`:host{flex:1 1 0;padding-bottom:1%;display:block}.tarjeta{flex-direction:column;align-items:center;gap:20px;height:100%;display:flex}.tarjeta__imagen{width:100%}::slotted([slot=imagen]){aspect-ratio:1;-o-object-fit:cover;object-fit:cover;border-radius:10px;width:100%;display:block}:host([direccion=horizontal]) .tarjeta{flex-direction:row;align-items:flex-start}:host([direccion=horizontal-reversa]) .tarjeta{flex-direction:row-reverse;align-items:flex-start}:host(.tarjeta--compacta[direccion=horizontal]) .tarjeta,:host(.tarjeta--compacta[direccion=horizontal-reversa]) .tarjeta{flex-direction:column;align-items:center}.tarjeta__contenido{flex-direction:column;flex-grow:1;gap:15px;width:100%;display:flex}.acciones{margin-top:auto}`,o=document.createElement(`template`);o.innerHTML=`
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


`;var s=class extends HTMLElement{constructor(){super(),this.DOM=this.attachShadow({mode:`open`}),this.resizeObserver=null,this.crearHTML()}connectedCallback(){this.iniciarResizeObserver(),this.actualizarModoCompacto(this.getBoundingClientRect().width)}disconnectedCallback(){this.resizeObserver&&=(this.resizeObserver.destructor(),null)}crearHTML(){this.DOM.appendChild(o.content.cloneNode(!0));let e=document.createElement(`style`);e.innerHTML=a,this.DOM.appendChild(e)}iniciarResizeObserver(){this.resizeObserver&&this.resizeObserver.destructor(),this.resizeObserver=new i(e=>{e.forEach(e=>{this.actualizarModoCompacto(e.contentRect.width)})}),this.resizeObserver.observar(this)}actualizarModoCompacto(e){let t=this.getAttribute(`direccion`),n=(t===`horizontal`||t===`horizontal-reversa`)&&e<450;this.classList.toggle(`tarjeta--compacta`,n)}};customElements.define(`app-tarjeta`,s);var c={async obtener(){try{let e=await fetch(this.url);if(!e.ok)throw Error(`Error al obtener`);return await e.json()}catch(e){return console.error(`Error al obtener `,e),[]}}},l=class{static generarContenidoInterno(e,t=!1){return`
            <img slot="imagen" ${t?`data-imagen="${e.imagen}"`:`src="${e.imagen}"`} alt="${e.titulo}">
            <div slot="contenido">
                <h2>${e.titulo}</h2>
                <p>${e.descripcion}</p>
            </div>
        `}static crearTarjeta(e){throw Error(`El método crearTarjeta() debe ser sobrescrito en la clase hija`)}},u=class extends l{static crearTarjeta(e,t=!1){return`
          <app-tarjeta id="${e.id}" >
            ${this.generarContenidoInterno(e,t)}
          </app-tarjeta>
        `}},d=class extends l{static crearTarjeta(e,t,n=!1){return`
            <app-tarjeta id="${e.id}">
                ${this.generarContenidoInterno(e,n)}

                <div slot="acciones">
                    <button class="${t}" >Favorito</button>
                </div>

            </app-tarjeta>

        `}},f=`
  <section class="blog">
        <h1 id="blog">Blog</h1>
            <div class="blog__lista">
  
        
            </div>
        <button class="boton boton--informacion">Ver Blog</button>
    </section>
  
`,p=class extends HTMLElement{constructor(){super(),this.url=`./data/blog.json`}async connectedCallback(){this.crearBlog();let e=(await this.obtener()).slice(0,3).map(e=>u.crearTarjeta(e)).join(``);this.querySelector(`.blog__lista`).innerHTML=e}crearBlog(){this.innerHTML=f}};Object.assign(p.prototype,c),customElements.define(`app-blog`,p);var m=`/assets/google-CfQ1KjUP.png`,h=`/assets/whitebelt-CJdpXzOX.png`,g=`/assets/inds_inspectionpng-BaUl5Itb.png`,_=`<section class="experiencia">
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
        
    </section>`,v=`<section class="experiencia">
        <h1 id="certificados">Certificados</h1>
        <div class="experiencia__lista">
            <div class="experiencia__proyecto">
                <div>
                    <h2>Computer Vision for Industrial Inspection</h2>
                    <p>Implementación de pipelines de visión por computadora para la inspección visual automatizada, aplicando técnicas de Transfer Learning para mejorar la precisión en la identificación de fallas de manufactura.</p>
                </div>
                <img class="experiencia__imagen" src="${g}" alt="Captura de pantalla del Proyecto 1">
            </div>
            <div class="experiencia__proyecto">
                <img class="experiencia__imagen" src="${h}" alt="Captura de pantalla del Proyecto 2">     
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
                <img class="experiencia__imagen" src="${m}" alt="Captura de pantalla del Proyecto 3">
            </div>
            <button class="boton boton--informacion">Ver más certificados</button>
        </div>
        
    </section>`,y=class extends HTMLElement{constructor(){super(),this.crearExperiencia()}crearExperiencia(){this.innerHTML=_+v}};customElements.define(`app-experiencia`,y);var b={enrutar(){document.querySelectorAll(`a.nav__link`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault();let t=e.target.getAttribute(`href`);this.ir(t)})}),window.addEventListener(`popstate`,e=>{this.ir(e.state.route,!1)}),this.ir(location.pathname)},ir(e,t=!0){switch(t&&history.pushState({route:e},``,e),e){case`/about`:document.getElementById(`main`).innerHTML=`<page-about></page-about>`;break;case`/proyectos`:document.getElementById(`main`).innerHTML=`<page-proyecto></page-proyecto>`;break;case`/blog`:document.getElementById(`main`).innerHTML=`<page-blog></page-blog>`;break;case`/contacto`:document.getElementById(`main`).innerHTML=`<page-contacto></page-contacto>`;break;default:document.getElementById(`main`).innerHTML=`<app-home></app-home>`}}},x=`    <app-presentacion></app-presentacion>

    <app-sobre-mi></app-sobre-mi>
    
    <app-experiencia></app-experiencia>
    
    <app-blog></app-blog>`,S=class extends HTMLElement{constructor(){super(),this.crearHome()}crearHome(){this.innerHTML=x}};customElements.define(`app-home`,S);var C=`.page-about{margin:5%;font-family:Fira Code,monospace}.page-about__titulo{color:#ffd700f2;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:#000;font-size:4rem;font-style:normal;font-weight:450;line-height:normal}.page-about__imagen{border-radius:50%;width:60%;margin:0 auto;display:block}.page-about__nombre{text-align:center;margin:0;font-family:Inter}`,w=`
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

`,T=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:`open`}),this.crearHtml()}crearHtml(){this.shadow.innerHTML=w;let e=document.createElement(`style`);e.innerHTML=C,this.shadow.appendChild(e)}};customElements.define(`page-about`,T);var E=`:host{--num-columnas:auto-fit;width:100%;display:block}.grilla{grid-template-columns:repeat(var(--num-columnas), minmax(300px, 1fr));-moz-column-gap:20px;gap:42px 20px;width:100%;display:grid}::slotted(*){height:100%}`,D=document.createElement(`template`);D.innerHTML=`
    
    <div class="grilla">
        <slot></slot>
    </div>

`;var O=class extends HTMLElement{constructor(){super(),this.DOM=this.attachShadow({mode:`open`})}connectedCallback(){this.crearHTML();let e=this.getAttribute(`columnas`)||`auto-fit`;this.style.setProperty(`--num-columnas`,e)}crearHTML(){this.DOM.appendChild(D.content.cloneNode(!0));let e=document.createElement(`style`);e.innerHTML=E,this.DOM.appendChild(e)}};customElements.define(`app-grilla`,O);var k=`.page-proyecto{margin:5%;font-family:Open Sans,sans-serif}.page-proyecto__titulo{color:gold;margin:0 0 .8rem;font-family:Fira Code,monospace;font-size:1.9rem;font-weight:400}app-grilla{margin-top:.4rem}app-tarjeta{background-color:#2c2c2c;border:1px solid #4b4b4a;border-radius:.6rem;padding:.7rem}`,A=`
    <section class="page-proyecto">
        <h1 class="page-proyecto__titulo">Proyectos</h1>

        <app-grilla columnas="3"></app-grilla>
        
    </section>
`,j=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:`open`}),this.datos=[],this.url=`./data/proyecto.json`}async connectedCallback(){this.crearHTML(),await this.cargarDatos(),this.imprimirProyectos()}crearHTML(){this.shadow.innerHTML=A;let e=document.createElement(`style`);e.innerHTML=k,this.shadow.appendChild(e)}async cargarDatos(){this.datos=await this.obtener()}imprimirProyectos(){let e=this.shadow.querySelector(`app-grilla`);e.innerHTML=this.datos.map(e=>u.crearTarjeta(e)).join(``)}};Object.assign(j.prototype,c),customElements.define(`page-proyecto`,j);var M={detectarCambio:function(e,t,n){t.addEventListener(`click`,()=>{let t=e.value;n(t)})}},N={normalizarTexto(e){return e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``)},filtrar(e,t,n){return e.filter(e=>this.normalizarTexto(e[t]).includes(this.normalizarTexto(n)))},filtrarSensible(e,t,n){return e.filter(e=>e[t].includes(n))},obtenerValoresUnicos(e,t){let n=e.map(e=>e[t]);return[...new Set(n)]}},P={favoritos:new Set,agregarFavorito(e){this.favoritos.add(String(e))},eliminarFavorito(e){this.favoritos.delete(String(e))},esFavorito(e){return this.favoritos.has(String(e))},obtenerFavoritos(){return Array.from(this.favoritos)}},F=class{constructor(e,t){this.opciones=e,this.callback=t,this.observer=new IntersectionObserver(this.callback,this.opciones)}observar(e){e&&this.observer.observe(e)}dejarDeObservar(e){e&&this.observer.unobserve(e)}destructor(){this.observer&&this.observer.disconnect()}},I=class{constructor(e){this.callback=e,this.observer=new MutationObserver(this.callback)}observar(e,t){e&&this.observer.observe(e,t)}destructor(){this.observer&&this.observer.disconnect()}},L=`.page-blog{margin:5%;font-family:Open Sans,sans-serif}.page-blog__titulo{color:gold;margin:0 0 .8rem;font-family:Fira Code,monospace;font-size:1.9rem;font-weight:400}.page-blog__buscador{flex-flow:column wrap;justify-content:center;align-items:center;gap:.5rem;width:100%;padding:.6rem 0 1rem;display:flex}.page-blog__input-buscar{color:#fff;background-color:#1f1f1f;border:1px solid #4b4b4a;border-radius:.5rem;min-width:220px;padding:.5rem .7rem}.page-blog__boton-categoria,.page-blog__boton-buscar{color:#000;background-color:gold;border:1px solid #000;border-radius:.5rem;padding:.5rem .9rem;font-weight:700}.page-blog__categorias{flex-wrap:wrap;justify-content:center;gap:.5rem;display:flex}.page-blog__categorias p{color:#fff;background-color:#1f1f1f;border:1px solid #4b4b4a;border-radius:.4rem;margin:0;padding:.2rem .8rem}.page-blog__categorias--oculto{display:none!important}.page-blog__boton-favorito{background-color:#0000;border:1px solid #5a5a5a;border-radius:.4rem;padding:.15rem .45rem;font-size:20px}.page-blog__boton-favorito--favorito{color:gold;border-color:gold}.page-blog__boton-favorito--no-favorito{color:gray}app-grilla{margin-top:.4rem}app-tarjeta{background-color:#2c2c2c;border:1px solid #4b4b4a;border-radius:.6rem;padding:.7rem}.page-blog__tarjeta-aparecer{will-change:opacity, transform;animation:.32s ease-out both page-blog-aparecer}@keyframes page-blog-aparecer{0%{opacity:0;transform:translateY(10px)scale(.99)}to{opacity:1;transform:translateY(0)scale(1)}}`,R=` 
    <section class = "page-blog">
        <h1 class="page-blog__titulo">Blog </h1>
        
        <div class= "page-blog__buscador">
            <div>
                <input type="text" placeholder="Buscar blog" class="page-blog__input-buscar"><button class="page-blog__boton-categoria">categoria</button>
                <button class="page-blog__boton-buscar">Buscar</button>
            </div>

            <div class="page-blog__categorias page-blog__categorias--oculto " >
            </div>
        
        </div>

        <app-grilla columnas="3"></app-grilla>
        
    
    </section>
`,z=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:`open`}),this.datos=[],this.datosFiltrados=[],this.categoriasvalores=[],this.datosTitulo=`titulo`,this.datosCategoria=`categoria`,this.url=`./data/blog.json`,this.observer=null,this.mutationObserver=null}async connectedCallback(){this.crearHTML(),this.iniciarMutationObserver(),await this.cargarDatos(),this.inicializarCategorias(),this.imprimirDatos(this.datos),this.buscador(),this.categorias(),this.inicializarFavoritos()}disconnectedCallback(){this.observer&&=(this.observer.destructor(),null),this.mutationObserver&&=(this.mutationObserver.destructor(),null)}crearHTML(){this.shadow.innerHTML=R;let e=document.createElement(`style`);e.innerHTML=L,this.shadow.appendChild(e)}async cargarDatos(){this.datos=await this.obtener(),this.categoriasvalores=N.obtenerValoresUnicos(this.datos,this.datosCategoria)}inicializarCategorias(){let e=this.shadow.querySelector(`.page-blog__categorias`);e.innerHTML=`<p>Todos</p>`+this.categoriasvalores.map(e=>`<p>${e}</p>`).join(``)}imprimirDatos(e){let t=e.map(e=>P.esFavorito(e.id)?d.crearTarjeta(e,` page-blog__boton-favorito page-blog__boton-favorito--favorito`,!0):d.crearTarjeta(e,`page-blog__boton-favorito page-blog__boton-favorito--no-favorito`,!0)).join(``);this.shadow.querySelector(`app-grilla`).innerHTML=t,this.iniciarIntersectionObserver()}iniciarIntersectionObserver(){this.observer&&this.observer.destructor(),this.observer=new F({root:null,rootMargin:`0px 0px 100px 0px`,threshold:0},e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target;t.dataset.imagen&&(t.src=t.dataset.imagen,t.removeAttribute(`data-imagen`)),this.observer.dejarDeObservar(t)}})}),this.shadow.querySelectorAll(`img[data-imagen]`).forEach(e=>{this.observer.observar(e)})}iniciarMutationObserver(){this.mutationObserver&&this.mutationObserver.destructor();let e=this.shadow.querySelector(`app-grilla`);e&&(this.mutationObserver=new I(e=>{e.forEach(e=>{e.type!==`childList`||e.addedNodes.length===0||e.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&e.matches(`app-tarjeta`)&&e.classList.add(`page-blog__tarjeta-aparecer`)})})}),this.mutationObserver.observar(e,{childList:!0,subtree:!1}))}buscador(){let e=this.shadow.querySelector(`.page-blog__input-buscar`),t=this.shadow.querySelector(`.page-blog__boton-buscar`);M.detectarCambio(e,t,e=>{this.datosFiltrados=N.filtrar(this.datos,this.datosTitulo,e),e===``&&(this.datosFiltrados=this.datos),this.imprimirDatos(this.datosFiltrados)})}categorias(){let e=this.shadow.querySelector(`.page-blog__boton-categoria`),t=this.shadow.querySelector(`.page-blog__categorias`);e.addEventListener(`click`,()=>{t.classList.toggle(`page-blog__categorias--oculto`)}),t.addEventListener(`click`,e=>{if(e.target.matches(`p`)){let t=e.target.textContent;if(t===`Todos`){this.datosFiltrados=this.datos,this.imprimirDatos(this.datosFiltrados);return}this.datosFiltrados=N.filtrar(this.datos,this.datosCategoria,t),this.imprimirDatos(this.datosFiltrados)}})}inicializarFavoritos(){this.shadow.querySelector(`app-grilla`).addEventListener(`click`,e=>{let t=e.target.closest(`.page-blog__boton-favorito`);if(!t)return;let n=t.closest(`app-tarjeta`).id;P.esFavorito(n)?(P.eliminarFavorito(n),t.classList.replace(`page-blog__boton-favorito--favorito`,`page-blog__boton-favorito--no-favorito`)):(P.agregarFavorito(n),t.classList.replace(`page-blog__boton-favorito--no-favorito`,`page-blog__boton-favorito--favorito`))})}};Object.assign(z.prototype,c),customElements.define(`page-blog`,z);var B=`.page-contacto{color:#fff;background-color:#252525;border-radius:1rem;flex-direction:column;gap:.5rem;margin:5%;padding:1.5rem;font-family:Open Sans,sans-serif;display:flex}.page-contacto__titulo{text-align:center;color:gold;margin:0 0 1rem;font-family:Fira Code,monospace;font-size:2rem;font-weight:400}.page-contacto__titulo-input{color:gold;margin:.5rem 0 .2rem;font-size:1rem;font-weight:400}.page-contacto input,.page-contacto textarea{box-sizing:border-box;color:#fff;background-color:#1f1f1f;border:1px solid #4b4b4a;border-radius:.5rem;width:100%;padding:.6rem;font-family:Open Sans,sans-serif;font-size:1rem}.page-contacto textarea{resize:vertical;min-height:120px}.page-contacto button{color:#000;background-color:gold;border:1px solid #000;border-radius:.6rem;align-self:flex-start;margin-top:.8rem;padding:.6rem 1.2rem;font-family:Open Sans,sans-serif;font-size:1rem;font-weight:700}`,V=`
    <section class="page-contacto">
        <h1 class="page-contacto__titulo">Contacto</h1>
        
        <h3 class="page-contacto__titulo-input" >Nombre:</h3>
        <input type="text">

        <h3 class="page-contacto__titulo-input">Correo:</h3>
        <input type="email">

        <h3 class="page-contacto__titulo-input">Mensaje:</h3>
        <textarea name="" id="" ></textarea>

        
        <button>Enviar</button>

    </section>

`,H=class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:`open`}),this.crearHTML()}crearHTML(){this.shadow.innerHTML=V;let e=document.createElement(`style`);e.innerHTML=B,this.shadow.appendChild(e)}};customElements.define(`page-contacto`,H),addEventListener(`DOMContentLoaded`,()=>{b.enrutar()});