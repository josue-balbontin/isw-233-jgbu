
export class WrapperIntersectionObserver{

    constructor(opciones , callback ){
        this.opciones = opciones;
        this.callback = callback;
        this.observer = new IntersectionObserver(this.callback , this.opciones);
    }

    observar(elemento){
        if(elemento){
             this.observer.observe(elemento);
        }
       
    }

    dejarDeObservar(elemento){
        if (elemento) {
            this.observer.unobserve(elemento);
        }
    }

    destructor(){
        if (this.observer) {
            this.observer.disconnect();
        }
    }


}