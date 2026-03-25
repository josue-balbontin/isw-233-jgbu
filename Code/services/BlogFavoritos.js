export const blogFavoritos = {
    favoritos : new Set(),

    agregarFavorito(id){
        this.favoritos.add(id);
    },

    eliminarFavorito(id){
        this.favoritos.delete(id);
    },

    esFavorito(id){
        return this.favoritos.has(id);
    },

    obtenerFavoritos(){
        return Array.from(this.favoritos);
    }
    



    

}