//Show Details with button

function showDetails1(){
    document.getElementById("details1").style.display =" grid";
}

function showDetails2(){
    document.getElementById("details2").style.display =" grid";
}

function showDetails3(){
    document.getElementById("details3").style.display =" grid";
}

// Calculate Button 
function calcular1(){
    document.getElementById('contenedor1').style.display = " none";
    document.getElementById("contenedor2").style.display = " flex";
}

//Get data user
var valor = 0;
var descuento =0;
var total = 0;

function getCantidad(){
    var cantidad = document.getElementById("cantidadPc").value;
    console.log(cantidad);
    calcular2();

    function calcular2(){
    console.log("estas en calcular2")
    if(cantidad < 2){
        valor = cantidad * 820000;
        document.getElementById("valor").value = valor;
        descuento = 0;
        document.getElementById("descuento").value = descuento;
        total = valor + descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento1").style.display = " flex";
    }
    else if(cantidad >= 2 && cantidad <= 4){
        valor = cantidad * 820000;
        document.getElementById("valor").value = valor;
        descuento = (valor *15) / 100;
        document.getElementById("descuento").value = descuento;
        total = valor + descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento2").style.display = " flex";
    } 
    else if(cantidad > 4 && cantidad <= 8){
        valor = cantidad * 820000;
        document.getElementById("valor").value = valor;
        descuento = (valor *25) / 100;
        document.getElementById("descuento").value = descuento;
        total = valor + descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento3").style.display = " flex";
    }
    else if(cantidad > 8 && cantidad <= 12){
        valor = cantidad * 820000;
        document.getElementById("valor").value = valor;
        descuento = (valor *35) / 100;
        document.getElementById("descuento").value = descuento;
        total = valor + descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento3").style.display = " flex";
    }
    else{
        valor = cantidad * 820000;
        document.getElementById("valor").value = valor;
        descuento = 0;
        document.getElementById("descuento").value = descuento;
        total = valor + descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento1").style.display = " flex";
    }  
}
}

