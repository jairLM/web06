/**
 * clase productos
 * El nombre de las clases se realizan con UpperCamelCase
 */
class Products {
    //definimos atributos

    //el método constructor nos yuda a instanciar un objeto
    constructor(id, name){
        this.name = name; //creando el atributo name y le asignamos el valor de parámetro name
        this.id = id;
        this.createAt = new Date().getTime();
        //console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
    }

    lifeSpan(){
        return new Date().getTime() - this.createAt;
    }
    
}

//exportar las clases, funciones, variables, etc

export{Products};