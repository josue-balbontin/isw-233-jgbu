export class WrapperMutationObserver {

    constructor(callback) {
        this.callback = callback;
        this.observer = new MutationObserver(this.callback);
    }

    observar(elemento, opciones) {
        if (elemento) {
            this.observer.observe(elemento, opciones);
        }
    }

    destructor() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}