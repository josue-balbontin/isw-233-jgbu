
const router = {
    enrutar(){
        document.querySelectorAll("a.nav__link").forEach((a) => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const href = event.target.getAttribute("href");
                this.ir(href);
            });
        });
        window.addEventListener("popstate", (event) => {
            this.ir(event.state.route, false);
        });
        this.ir(location.pathname);
    },

    ir(route, addToHistory = true){
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }

        switch(route){
            case "/about":
                document.getElementById("main").innerHTML = "<page-about></page-about>";
            break;
            case "/proyectos":
                document.getElementById("main").innerHTML = "<h1>proyectos</h1>";
            break;
            case "/blog":
                document.getElementById("main").innerHTML = "<h1>blog</h1>";
            break;
            case "/contacto":
                document.getElementById("main").innerHTML = "<h1>contacto</h1>";
            break;
            
            
            default:
                document.getElementById("main").innerHTML = "<app-home></app-home>";
        }

       
    },
}


export default router;