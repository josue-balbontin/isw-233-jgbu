

const html = `
    <section class="presentacion">
        <div class="presentacion__informacion">
            <h1 class="presentacion__titulo">Ingeniero en Software</h1>
            <h2>Josue Balbontin</h2>
            <h3>Desarollador Full Stack</h3>
            
            <button class="boton boton--principal presentacion__boton"><p>Contáctame</p></button>
        </div>

        <div class="presentacion__imagenes">
            <img class="presentacion__perfil" src="img/FotoPerfil.png" alt="Foto de perfil">
            
            <div class="presentacion__redes">
                <a href="mailto:josuebalbontin@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <img src="img/gmail.svg" alt="Gmail">
                </a>
                <a href="https://www.linkedin.com/in/josue-galo-balbontin-ugarteche-50149436b/" target="_blank" rel="noopener noreferrer">
                    <img src="img/linkedin.svg" alt="LinkedIn">
                </a>
                <a href="https://github.com/josue-balbontin" target="_blank" rel="noopener noreferrer">
                    <img src="img/github.svg" alt="GitHub">
                </a>
            </div>
        </div>
    </section>
`;


export class Presentacion extends HTMLElement {
    constructor() {
        super();
        this.crearPresentacion(); 
    }


    crearPresentacion() {
        this.innerHTML = html;
    }

}

customElements.define('app-presentacion', Presentacion);