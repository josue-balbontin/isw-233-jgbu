import { Presentacion } from "./blocks/home/presentacion/presentacion.js";
import { SobreMi } from "./blocks/home/sobre-mi/sobre-mi.js";
import { Blog } from "./blocks/blog/blog.js";
import { Experiencia } from "./blocks/home/experiencia/experiencia.js";
import router from "./services/router.js";
import { Home } from "./blocks/home/home.js";

addEventListener("DOMContentLoaded", () => {

    router.enrutar(); 
});