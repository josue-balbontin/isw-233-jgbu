
export class WrapperIntersectionObserver {
    private observer: IntersectionObserver;

    constructor(opciones: IntersectionObserverInit, callback: IntersectionObserverCallback) {
        this.observer = new IntersectionObserver(callback, opciones);
    }

    observar(elemento: Element | null): void {
        if (elemento) {
            this.observer.observe(elemento);
        }
    }

    dejarDeObservar(elemento: Element | null): void {
        if (elemento) {
            this.observer.unobserve(elemento);
        }
    }

    destructor(): void {
        this.observer.disconnect();
    }
}
