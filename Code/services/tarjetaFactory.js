
class tarjeta{

    static generarContenidoInterno(datos , usarLazy = false){
        
        const atributoImagen = usarLazy ? `data-imagen="${datos.imagen}"` : `src="${datos.imagen}"`;

        return /*html*/`
            <img slot="imagen" ${atributoImagen} alt="${datos.titulo}">
            <div slot="contenido">
                <h2>${datos.titulo}</h2>
                <p>${datos.descripcion}</p>
            </div>
        `
    }

    static crearTarjeta(datos){
        throw new Error("El método crearTarjeta() debe ser sobrescrito en la clase hija");
    }
}


export class tarjetaVertical extends tarjeta{
    static crearTarjeta(datos, usarLazy = false){
        return /*html*/`
          <app-tarjeta id="${datos.id}" >
            ${this.generarContenidoInterno(datos, usarLazy)}
          </app-tarjeta>
        `

    }
    

}



export class tarjetaHorizontal extends tarjeta{
    static crearTarjeta(datos , usarLazy = false){
        return /*html*/`
            <app-tarjeta direccion="horizontal" id="${datos.id}">
                  ${this.generarContenidoInterno(datos, usarLazy)} 
            </app-tarjeta>
        `

    }

}


export class tarjetaHorizontalReversa extends tarjeta{
    static crearTarjeta(datos, usarLazy = false){
        return /*html*/`
            <app-tarjeta direccion="horizontal-reversa" id="${datos.id}">
                 ${this.generarContenidoInterno(datos, usarLazy)}
            </app-tarjeta>
        `

    }

}


export class tarjetaVerticalFavorito extends tarjeta{
    static crearTarjeta(datos , classfavorito , usarLazy = false){
        return /*html*/`
            <app-tarjeta id="${datos.id}">
                ${this.generarContenidoInterno(datos, usarLazy)}

                <div slot="acciones">
                    <button class="${classfavorito}" >Favorito</button>
                </div>

            </app-tarjeta>

        `
    }


}