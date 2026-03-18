
const html = `<h1>hola blog</h1>`;


export class PageBlog extends HTMLElement {
    constructor(){
        super(); 
        this.shadow = this.attachShadow({mode : "open"}); 
        this.crearHTML(); 
    }

    crearHTML(){
        this.shadow.innerHTML = html;
        
        const style = document.createElement("style");
  
        fetch ('/blocks/page-blog/page-blog.css').then(
            response => response.text().then(
                css => style.innerHTML = css
            )
        );

        this.shadow.appendChild(style);

     

    }

}

customElements.define("page-blog", PageBlog); 