
const html = `<h1>hola blog</h1>`;


export class PageBlog extends HTMLElement {
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open"}); 
        this.crearHTML(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
    }

}

customElements.define("page-blog", PageBlog); 