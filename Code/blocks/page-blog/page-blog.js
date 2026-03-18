
const html = 
` 
    <section class = "page-block">
        <h1>Blog </h1>
        
        <div class= "page-block-buscador">
            <input type="text" placeholder="Buscar blog"><button>categoria</button>
        </div>
    
    </section>
`;


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