
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
          <app-tarjeta>
            ${this.generarContenidoInterno(datos)}
          </app-tarjeta>
        `

    }
    

}



export class tarjetaHorizontal extends tarjeta{
    static crearTarjeta(datos){
        return /*html*/`
            <app-tarjeta direccion="horizontal">
                  ${this.generarContenidoInterno(datos)} 
            </app-tarjeta>
        `

    }

}


export class tarjetaHorizontalReversa extends tarjeta{
    static crearTarjeta(datos){
        return /*html*/`
            <app-tarjeta direccion="horizontal-reversa">
                 ${this.generarContenidoInterno(datos)}
            </app-tarjeta>
        `

    }

}