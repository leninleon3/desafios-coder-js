let carrito = 0;

const productos = []

class carteras {
constructor (modelo, precio, stock){
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
    }
}

const cartera1 = new carteras ("modelo1", 40, 10);
productos.push (cartera1);

const cartera2 = new carteras ("modelo2", 60, 3);
productos.push (cartera2);

const cartera3 = new carteras ("modelo3", 70, 5);
productos.push (cartera3);

const cartera4 = new carteras ("modelo1", 40, 2);
productos.push (cartera4);

const cartera5 = new carteras ("modelo2", 60, 6);
productos.push (cartera5);

const cartera6 = new carteras ("modelo3", 70, 2);
productos.push (cartera6);

const cartera7 = new carteras ("modelo1", 40, 1);
productos.push (cartera7);

const cartera8 = new carteras ("modelo4", 80, 10);
productos.push (cartera8);



for (let i=1; i<=8; i++){
        alert ("cartera " + i + " disponible");
    }
    
    function iva () {
        let compra = prompt ("ingrese su producto")
        let cantidad = Number (prompt ("ingrese la cantidad deseada"))

        let coincidencia = productos.find (e => {e.modelo === compra})

            if (cantidad > carteras.stock) {
            alert ("la cantidad solicitada excede nuestro stock actual");
            
        }
                
        else if (compra === coincidencia){

            carrito = cantidad * carteras.precio * 1.21;
            alert ("su carrito es un total de " + carrito);

            compra.stock - 1;


            return compra;

        } else if (compra != coincidencia) {
            alert ("producto no encontrado")
        }   
    }


    iva ();

    function stockRestante () {}


    const modelosRestantes = productos.filter ((el) => el.modelo.includes ("modelo1"))
    console.log (modelosRestantes);

    



