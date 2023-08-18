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


//usando la palabra reservada extends podemos haredar de otra clas
class TapiocaProducts extends Products{
    #atributoEncapsulado
    constructor( id, name, image, ingredients ){
        //invocando al método constructor
        //para encapsular un elemento agregamos al nombre el símbolo de # o _ y sacarolo del metodo constructor
        super(id, name, image);  //super invoca a los atributos y métodos la clase superior
        this.ingredients = Array.isArray(ingredients) ? ingredients : [];
        this.atributoEncapsulado = 'solamente tengo acceso dentro de la clase'
    }
    // metodos setters y getters
    get atributoEncapsulado(){
        return this.#atributoEncapsulado;
    }

    set atributoEncapsulado( nuevoValor ){
        this.#atributoEncapsulado = nuevoValor;
    }

}









//exportar las clases, funciones, variables, etc

export{Products, TapiocaProducts}; //agregar clase tapioca products cuando este el json