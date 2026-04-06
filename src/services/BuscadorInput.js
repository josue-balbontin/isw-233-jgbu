export const Buscadorinput= {


    detectarCambio: function (input , buton , accion) {
        buton.addEventListener( "click" , () => {
            const texto = input.value;
            accion(texto);
        }

        )
    },

}