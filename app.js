let carrito = 0;
    const producto1 = 30;
    const producto2 = 50;
    const producto3 = 35;
    const producto4 = 60;
    const producto5 = 45;

    for (let i=1; i<=5; i++){
        alert ("producto " + i + " disponible");
    }
    
    function sumar () {
        let compra = prompt ("ingrese su producto")

        if (compra === producto1 || compra === producto2 || compra === producto3 || compra === producto4 || compra === producto5){

            carrito = compra * (21/100);

        } else if (compra != producto1 || compra != producto2 || compra != producto3 || compra != producto4 || compra != producto5 ) {
            alert ("producto no encontrado");
        }   
    }

    sumar ();



