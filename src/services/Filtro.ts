

export const Filtro ={


    normalizarTexto(texto : string) : string{
        return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },

    filtrar(datos: any[], variable: string, filtro: string): any[] {
        return datos.filter(element => this.normalizarTexto(element[variable]).includes(this.normalizarTexto(filtro)));
        
    },

    filtrarSensible(datos: any[], variable: string, filtro: string): any[] {
        return datos.filter(element => element[variable].includes(filtro));
    },
    
    obtenerValoresUnicos(datos: any[], variable: string): any[] {

        const valores = datos.map(e => e[variable]);

        return [...new Set(valores)];

    },


}