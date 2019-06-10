// Clase de los productos
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// Clase de la Interfaz de Usuario
class UI {

    constructor() { }

    addProduct(product) {

        console.log(product);

        // Obtengo el contenedor de la lista de productos
        const product_list = document.getElementById('product-list');

        // Creo nuevo elemento de la lista
        const element = document.createElement('div');
        element.className = "col-12 col-md-6 col-lg-4";
        element.innerHTML = `
            <div class="cntr">
                    <!--Card 01-->
                    <div class="crd">
                        <!--Card - head-->
                        <div class="crd-hd">
                            <!--Card - logo-->
                            <img src="img/logo-nike.png" alt="nike" class="card-logo">
                            <!--Card - product-->
                            <img src="img/shirt-02.png" alt="shirt" class="product-img">
                            <!--Card- details-->
                            <div class="product-details">
                                <h2>${product.name}</h2>
                                Casual t-shirt that will make you 
                                look great and cool in this hot season
                            </div>
                            <div class="back-text">
                                ${product.year}
                            </div>
                        </div>
                        <!--Card - body-->
                        <div class="crd-bdy">
                            <div class="product-desc">
                                <span class="product-title">
                                    <b>Hartbee</b>spoort
                                    <span class="badge">
                                        New
                                    </span>
                                </span>
                                <span class="product-caption">
                                    Casual collection
                                </span>
                                <span class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star gray"></i>
                                </span>
                            </div>
                            <div class="product-properties">
                                <span class="product-size">
                                    <h4>Size</h4>
                                    <ul class="ul-size">
                                        <li><a href="#">7</a></li>
                                        <li><a href="#">8</a></li>
                                        <li><a href="#">9</a></li>
                                        <li><a href="#" class="active">10</a></li>
                                        <li><a href="#">11</a></li>
                                    </ul>
                                </span>
                                <span class="product-color">
                                    <h4>Colour</h4>
                                    <ul class="ul-color">
                                        <li><a href="#" class="orange active"></a></li>
                                        <li><a href="#" class="green"></a></li>
                                        <li><a href="#" class="yellow"></a></li>
                                    </ul>
                                </span>
                                <span class="product-price">
                                    MXN<b>${product.price}</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

        `;

        // Inserto nuevo elemento en la lista
        product_list.appendChild(element);

        // Limpio el formulario
        this.resetForm();
    }

    resetForm() {

        // Limpio el formulario
        document.getElementById("product-form").reset();
    }

    deleteProdut(element) {

        // si el usuario presionó delete, entonces eliminamos el producto
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }

        // muestro notificación de mensaje eliminado
        this.showMessage('Produt deleted successfully', 'success');
    }

    showMessage(message, cssClass) {

        // Creo la notificación
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // Muestro la notificacion
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);

        // Desaparezco mensaje después de 3 segundos
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);

    }

    addProdut() {

    }

}

/*==========
  DOM Events
  ==========*/

// Añador producto cuando el usuario da click
document.getElementById("product-form")
    .addEventListener("submit", function (e) {

        // Creo la interfaz de usuario
        const ui = new UI();

        // obtengo nombre, precio y año del producto
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        // Muestro error si el usuario no ha ingresado algún dato
        if (name === "" || price === "" || year === "") {
            ui.showMessage('Complete fields please', 'danger');

        } else {
            
            // Creo nuevo producto
            const product = new Product(name, price, year);

            // Inserto nuevo producto en la lista y notifico
            ui.addProduct(product);
            ui.showMessage('Product added succesfully', 'success');
        }

        // Cancelo refresh de la página
        e.preventDefault();
    });

// Eliminar producto cuando el usuario da click
document.getElementById('product-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteProduct(e.target);

});