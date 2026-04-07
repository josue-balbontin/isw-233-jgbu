import './index.css';

import { Presentacion } from "./blocks/home/__presentacion/home__presentacion.js";
import { SobreMi } from "./blocks/home/__sobre-mi/home__sobre-mi.js";
import { Blog } from "./blocks/home/__blog/home__blog.js";
import { Experiencia } from "./blocks/home/__experiencia/home__experiencia.js";
import router from "./services/router.js";
import { Home } from "./blocks/home/home.js";
import { PageAbout } from "./blocks/page-about/page-about.js";
import { PageProyecto } from "./blocks/page-proyecto/page-proyecto.js";
import { PageBlog } from "./blocks/page-blog/page-blog.js";
import { PageContacto } from "./blocks/page-contacto/page-contacto.js";



addEventListener("DOMContentLoaded", () => {

    router.enrutar(); 
});