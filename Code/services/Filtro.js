

export const Filtro ={


    normalizarTexto(texto){
        return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },

    filtrar(datos, variable , filtro ){

        return datos.filter(element => this.normalizarTexto(element[variable]).includes(this.normalizarTexto(filtro)));
        
    },

    filtrarSensible(datos, variable , filtro ){
        return datos.filter(element => element[variable].includes(filtro));
    },
    
    obtenerValoresUnicos(datos, variable){

        const valores = datos.map(e => e[variable]);

        return [...new Set(valores)];

    },


}