
import "./index.css";

import "./blocks/home/__presentacion/home__presentacion";
import "./blocks/home/__sobre-mi/home__sobre-mi";
import "./blocks/home/__blog/home__blog";
import "./blocks/home/__experiencia/home__experiencia";
import router from "./services/router";
import "./blocks/home/home";
import "./blocks/page-about/page-about";
import "./blocks/page-proyecto/page-proyecto";
import "./blocks/page-blog/page-blog";
import "./blocks/page-contacto/page-contacto";
import "./blocks/app-tarjeta/app-tarjeta";
import "./blocks/app-grilla/app-grilla";


addEventListener("DOMContentLoaded", () => {

    router.enrutar(); 
});