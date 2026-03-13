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

       
        alert(`Navegando a ${route}`);
    },
}


export default router;