export class WrapperResizeObserver {
    constructor(callback) {
        this.callback = callback;
        this.observer = new ResizeObserver(this.callback);
    }

    observar(elemento) {
        if (elemento) {
            this.observer.observe(elemento);
        }
    }

    dejarDeObservar(elemento) {
        if (elemento) {
            this.observer.unobserve(elemento);
        }
    }

    destructor() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
