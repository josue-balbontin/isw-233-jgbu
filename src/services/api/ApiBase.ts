export const  ApiBase = {
    url : "" ,
    

    async obtener() : Promise<any[]>{
        try{
            const respuesta = await fetch(this.url);

            if(!respuesta.ok){
                throw new Error('Error al obtener');
            }

            const datos = await respuesta.json();
            return datos;
        }
        catch(error){
            console.error('Error al obtener ', error);

            return []; 
        }
    }
    


 }