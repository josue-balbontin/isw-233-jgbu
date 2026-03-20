
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
                document.getElementById("main").innerHTML = "<page-proyecto></page-proyecto>";
            break;
            case "/blog":
                document.getElementById("main").innerHTML = "<page-blog></page-blog>";
            break;
            case "/contacto":
                document.getElementById("main").innerHTML = "<page-contacto></page-contacto>";
            break;
            
            
            default:
                document.getElementById("main").innerHTML = "<app-home></app-home>";
        }

       
    },
}


export default router;