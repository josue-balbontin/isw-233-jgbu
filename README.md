# isw-233-jgbu

## Introduccion

Soy Josué Balbontín. Este repositorio reúne ejercicios y un CV interactivo para practicar JavaScript, HTML y CSS con el objetivo de crear un currículum atractivo para reclutadores en la asignatura Programación Web.

## Estructura del proyecto

- 'Code/Components' contiene componentes reutilizables para el CV interactivo.
- 'Code/img' almacena imágenes utilizadas en el proyecto.
- 'Code/index.css' define estilos para el CV.
- 'Code/index.html' es la página principal del CV interactivo.
- 'Code/vendor' incluye bibliotecas externas utilizadas en el proyecto.


### Bloques identificados

- blog : Diseño y maquetación de la cuadrícula/lista de artículos e investigaciones.
- boton : Diseño base de los botones del CV y las distintas variantes de botones.
- experiencia :  Diseño y estructura de las secciónes de experiencia del CV renderiza tanto Proyectos Destacados como la de certificados.
- footer : Diseño y estructura del pie de página del CV.
- navbar : Diseño y estructura de la barra de navegación del CV.
- presentacion : Diseño y estructura de la sección de presentación del CV es la que introduce el perfil y las redes sociales.
- sobre-mi : Diseño y estructura de la sección "Sobre mí" del CV seccion biografica y resumen profesional.

## Que se hace

Se desarrollará un CV interactivo utilizando JavaScript, HTML y CSS. El CV incluirá secciones como experiencia laboral, educación, habilidades y proyectos, con interactividad para mejorar la experiencia del usuario.

## Como se hace

Se utilizará HTML para estructurar el contenido del CV, CSS para diseñar y estilizar la página, y JavaScript para agregar interactividad.

## Por que se hace
 
El objetivo es crear un CV atractivo y funcional que destaque las habilidades y experiencia de manera efectiva, aumentando las posibilidades de captar la atención de los reclutadores y mejorar las oportunidades laborales.

## Link al figma

Diseño del CV interactivo en Figma para visualizar la estructura y el diseño antes de implementarlo en código.

[Figma link](https://www.figma.com/design/QM0X5I1vRZHzMkErvJaD51/Sin-t%C3%ADtulo?node-id=0-1&t=hTVzGRtSPscoKkFu-1)

## Patrones de diseño de software implementados

* Singletone : Implementado en 'router.js' y 'BlogFavoritos.js' para asegurar que solo exista una instancia de cada uno, facilitando la gestión de rutas y el almacenamiento de favoritos en la aplicación.

* Factory : Implementado en 'tarjetaFactory.js' para crear diferentes tipos de tarjetas (verticales, horizontales, con o sin favoritos) de manera rapida y adaptable ademas para separar responsabilidades.

* Mixin : Se implemento en 'ApiBase.js' para compartir funcionalidades con otras clases y generar una base para la obtencion de datos de la API , permitiendo que cada clase hija implemente su propia api y manteniendo las responsabilidades separadas.

* template Metod : Implementado en 'tarjetaFactory.js' para implementar un esquelo y funcionalidad base para la creacion de tarjetas y luego cada tipo de tarjeta implementa su propia variacion de ese esquema.

## Observers

* IntersectionObserver : aplicacion de intersection observer para cargar las imagenes de las tarjetas en 'page-blog,js' para que estan sean cargadas solo cuando el usuario las necesita y mejorar el rendimiento este observer no se pone en las tarjetas ya que si estan ahi habria un observer por cada tarjeta siendo no eficiente , siendo la opcion mas eficiente ya que no se tiene que observar cada segundo el scroll 

* MutationObserver : aplicacion de mutation observer en la grilla de 'page-blog.js' para detectar cuando se agregan nuevas tarjetas al filtrar o buscar y aplicar una animacion de aparicion de forma automatica, mejorando la experiencia visual sin volver a renderizar todo el contenedor en cada cambio es el mejor por que observa las inserciones directamente en la grilla y solo reacciona cuando cambia el DOM.

* ResizeObserver : aplicacion de resize observer en 'app-tarjeta.js', donde cada tarjeta se observa a si misma para activar el modo compacto cuando su ancho baja (por ejemplo en tarjetas con direccion horizontal). Resuelve el problema de diseños que se rompen cuando el contenedor se hace mas estrecho por cambios internos de la SPA, incluso si la ventana no cambia de tamaño. Es la solucion adecuada frente a alternativas simples como window.resize o media queries globales, porque mide el tamaño real del componente y reacciona solo cuando ese elemento cambia.



## ChatIA

Chat de IA para resolver dudas y obtener sugerencias sobre el desarrollo del CV interactivo, facilitando el proceso de aprendizaje y mejorando la calidad del proyecto.

* Sprint 1

    [Chat](https://gemini.google.com/share/9b194c9abd6f)

* Sprint 2

    [Chat](https://gemini.google.com/share/3c34f50656e8)

* Sprint 3

    [Chat](https://gemini.google.com/share/d7bcf63d1078)

    [Chat](https://gemini.google.com/share/c5c0d40d10d1)

* Sprint 4

    [Chat](https://gemini.google.com/share/da69000cc9f1)
