export class WrapperMutationObserver {
    private observer: MutationObserver;

    constructor(callback: MutationCallback) {
        this.observer = new MutationObserver(callback);
    }

    observar(elemento: Node | null, opciones: MutationObserverInit): void {
        if (!elemento) {
            return;
        }

        this.observer.observe(elemento, opciones);
    }

    destructor(): void {
        this.observer.disconnect();
    }
}