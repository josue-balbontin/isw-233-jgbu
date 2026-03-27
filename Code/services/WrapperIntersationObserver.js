
export class WrapperIntersectionObserver{

    constructor(opciones , callback , elemento){
        this.opciones = opciones;
        this.callback = callback;
        this.elemento = elemento;
        this.observer = new IntersectionObserver(this.callback , this.opciones);
    }

    observar(){
        this.observer.observe(this.elemento);
    }

    destructor(){
        this.observer.disconnect();
        return null;
    }


}