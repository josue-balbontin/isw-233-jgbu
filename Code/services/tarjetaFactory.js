class tarjeta{
    static crearTarjeta(datos){
        throw new Error("El método crearTarjeta() debe ser sobrescrito en la clase hija");
    }
}


export class tarjetaVertical extends tarjeta{
    static crearTarjeta(datos){
        return /*html*/`
          <app-tarjeta>
            <img slot="imagen" src="${datos.imagen}" alt="${datos.titulo}">
            <div slot="contenido">
                <h2>${datos.titulo}</h2>
                <p>${datos.descripcion}</p>
            </div>
          </app-tarjeta>
        `

    }
    

}

export class tarjetaVerticalFavorito extends tarjeta{
    static crearTarjeta(datos){


    }


}


export class tarjetaHorizontal extends tarjeta{
    static crearTarjeta(datos){


    }

}