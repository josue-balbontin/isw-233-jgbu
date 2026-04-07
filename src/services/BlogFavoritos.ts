export const blogFavoritos = {
    favoritos : new Set<string>(),

    agregarFavorito(id : string) : void{
        this.favoritos.add(id);
    },

    eliminarFavorito(id : string) : void{
        this.favoritos.delete(id);
    },

    esFavorito(id : string) : boolean{
        return this.favoritos.has(id);
    },

    obtenerFavoritos() : string[]{
        return Array.from(this.favoritos);
    }
    



    

}