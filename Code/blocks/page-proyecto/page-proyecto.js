
const html = /*html*/`
    <section class="page-proyecto">
        <h1>Proyectos</h1>
        
    </section>
`;


export class PageProyecto extends HTMLElement {
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open" });
        this.crearHTML(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        fetch ('/blocks/page-proyecto/page-proyecto.css').then(
            response => response.text().then(
                css => style.innerHTML = css
            )
        );

        this.shadow.appendChild(style);
    }

}

customElements.define("page-proyecto", PageProyecto);