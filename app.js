let carrito = 0;
    const producto1 = 30;
    const producto2 = 50;
    const producto3 = 35;
    const producto4 = 60;
    const producto5 = 45;
    
    function sumar (producto1, producto2, producto3, producto4, producto5) {
    
    for (let i=1; i <=5 ; i++) {
        let compra = prompt ("ingrese su producto");

        if (compra === producto1 || compra === producto2 || compra === producto3 || compra === producto4 || compra === producto5) {
            console.log (compra + compra + compra + compra + compra);}

            else if (compra != producto1 || compra != producto2 || compra != producto3 || compra != producto4 || compra != producto5 )
            {console.log ("producto no seleccionado")}
        
    }
}



