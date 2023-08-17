console.log('sesion JS08-clases');

const getProducts = async() =>{
    const url = 'https://fakestoreapi.com/products';
    const responseJson = await fetch(url);
    const response = await responseJson.json();
    console.log(response);
    return response
}
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

function createProductoOfClassProducts(){
                //Instanciar la clase Products para crear un objeto
    const zote = new Products(1, 'Zote');
    const products = [];
    products.push ( zote );
    products.push ( new Products(2, 'Palmolive') );
    products.push ( new Products(3, 'CocaCola') );
    products.push ( new Products(4, 'Corona') );
    products.push ( new Products(5, 'Chips') );
    products.push ( new Products(6, 'Herdez, chicharos') );
    products.push ( new Products(7, 'Salsa Valentina') );
    products.push ( new Products(8, 'Sopa Nissin') );
    console.table(products)

 return products;
}

function createListItemsOfProducts(products){ //crea list item
    //El método map sobre un arreglo, itera sobre cada elemento del arreglo y entrega uno nuevo
    const productsLifeSpan = products.map( product => `<li>${product.name} se creo ${product.lifeSpan()/1000} s.</li>`);
    return productsLifeSpan;
}

function insertListItem(listItems){
    const products = document.getElementById('productos');
    const unorderList = `<ul>${listItems.join('')}</ul>` 
    products.innerHTML = unorderList;
}

function onclickLifeSpan(){

    const products = createProductoOfClassProducts(); //crea objetos
    setTimeout(() => {
        const productsListItem = createListItemsOfProducts(products);    
        insertListItem(productsListItem);
    }, 5000);
    

}

//============================================

async function showProducts(){
    //const products = createProductoOfClassProducts();
    const products = await createProductsOfFakeStore();
    const productsCards = createCardsOfProducts(products);
    insertCards(productsCards);

}


async function createProductsOfFakeStore(){
    const fakeProducts = await getProducts();

    //return fakeProducts.map(fakeProduct => new Products(fakeProduct.id, fakeProduct.title));
    return fakeProducts.map(({id, title}) => new Products(id , title));

}



function createCardsOfProducts(products){

    return products.map( (product)=>
        `
        <div class="card col-4 m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${product.id}</h6>
                <p class="card-text">Some content about the products.</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>       
        `

    );

}

function insertCards(productsCards){
    const products = document.getElementById('productos');
    const cards = `<div class="row">${productsCards.join('')}</div>` 
    products.innerHTML = cards;
};
