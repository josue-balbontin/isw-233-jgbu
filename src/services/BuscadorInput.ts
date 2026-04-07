export const Buscadorinput = {
    detectarCambio(input: HTMLInputElement | null, button: HTMLButtonElement | null, accion: (texto: string) => void,
    ) {
        if (!input || !button) {
            console.log("Buscadorinput.detectarCambio: input o button no encontrados.");
            return;
        }

        button.addEventListener("click", () => {
            const texto = input.value;
            accion(texto);
        });
    },
};