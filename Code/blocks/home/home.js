
const html = `    <app-presentacion></app-presentacion>

    <app-sobre-mi></app-sobre-mi>
    
    <app-experiencia></app-experiencia>
    
    <app-blog></app-blog>`;


export class Home extends HTMLElement {
    constructor() {
        super();
        this.crearHome();
    }

    crearHome() {
        this.innerHTML = html;
    }
}

customElements.define('app-home', Home);