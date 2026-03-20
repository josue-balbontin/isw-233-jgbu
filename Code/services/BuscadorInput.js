export const Buscadorinput= {


    detectarCambio: function (input , buton) {
        buton.addEventListener( "click" , () => {
            alert("Buscando: " + input.value);
        }

        )
    },

}