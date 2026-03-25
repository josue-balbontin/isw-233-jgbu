
class tarjeta{

    static generarContenidoInterno(datos){
        return /*html*/`
            <img slot="imagen" src="${datos.imagen}" alt="${datos.titulo}">
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
    static crearTarjeta(datos){
        return /*html*/`
          <app-tarjeta id="${datos.id}" >
            ${this.generarContenidoInterno(datos)}
          </app-tarjeta>
        `

    }
    

}



export class tarjetaHorizontal extends tarjeta{
    static crearTarjeta(datos){
        return /*html*/`
            <app-tarjeta direccion="horizontal" id="${datos.id}">
                  ${this.generarContenidoInterno(datos)} 
            </app-tarjeta>
        `

    }

}


export class tarjetaHorizontalReversa extends tarjeta{
    static crearTarjeta(datos){
        return /*html*/`
            <app-tarjeta direccion="horizontal-reversa" id="${datos.id}">
                 ${this.generarContenidoInterno(datos)}
            </app-tarjeta>
        `

    }

}


export class tarjetaVerticalFavorito extends tarjeta{
    static crearTarjeta(datos , classfavorito){
        return /*html*/`
            <app-tarjeta id="${datos.id}">
                ${this.generarContenidoInterno(datos)}

                <div slot="acciones">
                    <button class="${classfavorito}" ></button>
                </div>

            </app-tarjeta>

        `
    }


}