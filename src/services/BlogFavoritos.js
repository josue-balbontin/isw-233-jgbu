export const blogFavoritos = {
    favoritos : new Set(),

    agregarFavorito(id){
        this.favoritos.add(String(id));
    },

    eliminarFavorito(id){
        this.favoritos.delete(String(id));
    },

    esFavorito(id){
        return this.favoritos.has(String(id));
    },

    obtenerFavoritos(){
        return Array.from(this.favoritos);
    }
    



    

}