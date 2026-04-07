export class WrapperResizeObserver {
    private observer: ResizeObserver;

    constructor(callback: ResizeObserverCallback) {
        this.observer = new ResizeObserver(callback);
    }

    observar(elemento: Element | null): void {
        if (!elemento) {
            return;
        }

        this.observer.observe(elemento);
    }

    dejarDeObservar(elemento: Element | null): void {
        if (!elemento) {
            return;
        }

        this.observer.unobserve(elemento);
    }

    destructor(): void {
        this.observer.disconnect();
    }
}
