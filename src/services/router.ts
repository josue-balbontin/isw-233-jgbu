
const router = {
    enrutar() : void{
        document.querySelectorAll("a.nav__link").forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const href = a.getAttribute("href");
                
                if(href){
                     this.ir(href);
                }
           
            });
        });
        window.addEventListener("popstate", (event) => {
            this.ir(event.state.route, false);
        });
        this.ir(location.pathname);
    },

    ir(route : string, addToHistory = true ) : void{
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
        const main = document.getElementById("main");
        if(!main){
            console.error("No se encontró el elemento con id 'main'");
            return;
        }


        switch(route){
            case "/about":
                main.innerHTML = "<page-about></page-about>";
            break;
            case "/proyectos":
                main.innerHTML = "<page-proyecto></page-proyecto>";
            break;
            case "/blog":
                main.innerHTML = "<page-blog></page-blog>";
            break;
            case "/contacto":
                main.innerHTML = "<page-contacto></page-contacto>";
            break;
            
            
            default:
                main.innerHTML = "<app-home></app-home>";
        }

       
    },
}


export default router;