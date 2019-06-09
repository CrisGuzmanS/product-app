// Clase de los productos
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// Clase de la Interfaz de Usuario
class UI{

    constructor(){}

    addProduct(product){
        
        console.log(product);

        // Obtengo el contenedor de la lista de productos
        const product_list = document.getElementById('product-list');

        // Creo nuevo elemento de la lista
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-2">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">DELETE</a>
                </div>
            </div>
        `;

        // Inserto nuevo elemento de la lista
        product_list.appendChild(element);

        // Limpio el formulario
        this.resetForm();
    }

    resetForm(){

        // Limpio el formulario
        document.getElementById("product-form").reset();
    }

    deleteProdut(element){

        // si el usuario presionó delete, entonces eliminamos el producto
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }

        // muestro notificación de mensaje eliminado
        this.showMessage('Produt deleted successfully', 'success');
    }

    showMessage( message, cssClass){

        // Creo la notificación
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // Muestro la notificacion
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);

        // Desaparezco mensaje después de 3 segundos
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);

    }

    addProdut(){

    }

}

/*==========
  DOM Events
  ==========*/

// Añador producto cuando el usuario da click
document.getElementById("product-form")
    .addEventListener("submit", function(e){
        
        // Creo la interfaz de usuario
        const ui = new UI();

        // obtengo nombre, precio y año del producto
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        if(name === "" || price === "" || year === ""){
            return ui.showMessage('Complete fields please', 'danger');
        } 

        // Creo nuevo producto
        const product = new Product(name, price, year);

        // Inserto nuevo producto en la lista y notifico
        ui.addProduct(product);
        ui.showMessage('Product added succesfully', 'success');     

        // Cancelo refresh de la página
        e.preventDefault();
    });

// Eliminar producto cuando el usuario da click
document.getElementById('product-list').addEventListener('click', function(e){
    
    const ui = new UI();
    ui.deleteProduct(e.target);

});