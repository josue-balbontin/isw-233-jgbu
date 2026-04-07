
class tarjeta{

    static generarContenidoInterno(datos : any , usarLazy = false) : string{
        
        const atributoImagen = usarLazy ? `data-imagen="${datos.imagen}"` : `src="${datos.imagen}"`;

        return /*html*/`
            <img slot="imagen" ${atributoImagen} alt="${datos.titulo}">
            <div slot="contenido">
                <h2>${datos.titulo}</h2>
                <p>${datos.descripcion}</p>
            </div>
        `
    }

    static crearTarjeta(datos : any) : string{
        throw new Error("El método crearTarjeta() debe ser sobrescrito en la clase hija");
    }
}


export class tarjetaVertical extends tarjeta{
    static crearTarjeta(datos: any, usarLazy = false) : string{
        return /*html*/`
          <app-tarjeta id="${datos.id}" >
            ${this.generarContenidoInterno(datos, usarLazy)}
          </app-tarjeta>
        `

    }
    

}



export class tarjetaHorizontal extends tarjeta{
    static crearTarjeta(datos: any, usarLazy = false) : string{
        return /*html*/`
            <app-tarjeta direccion="horizontal" id="${datos.id}">
                  ${this.generarContenidoInterno(datos, usarLazy)} 
            </app-tarjeta>
        `

    }

}


export class tarjetaHorizontalReversa extends tarjeta{
    static crearTarjeta(datos: any, usarLazy = false) : string{
        return /*html*/`
            <app-tarjeta direccion="horizontal-reversa" id="${datos.id}">
                 ${this.generarContenidoInterno(datos, usarLazy)}
            </app-tarjeta>
        `

    }

}


export class tarjetaVerticalFavorito extends tarjeta{
    static crearTarjeta(datos: any, classfavorito = "page-blog__boton-favorito page-blog__boton-favorito--no-favorito", usarLazy = false,
    ): string {
        const clase = classfavorito.trim();

        return /*html*/`
            <app-tarjeta id="${datos.id}">
                ${this.generarContenidoInterno(datos, usarLazy)}

                <div slot="acciones">
                    <button type="button" class="${clase}">Favorito</button>
                </div>

            </app-tarjeta>

        `;
    }


}