const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".navbar-nav");


navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav-menu_visible");


})

function cerrara2() {


    document.getElementById("msg2").classList.remove("mensaje-alerta2-show");
    document.getElementById("alerta2").classList.remove("alert-danger");


}

function alerta() {


    var a = document.getElementById("ra").value;
    var b = document.getElementById("rb").value || 0;

    if (a > b) {

        document.getElementById("msg").classList.add("mensaje-alerta-show");
        document.getElementById("alerta").classList.add("alert-info");

        if (b != 0) {
            var a = document.getElementById("ra").value = "";
        }

    } else {

        document.getElementById("msg").classList.remove("mensaje-alerta-show");
        document.getElementById("alerta").classList.remove("alert-info");


    }


}

function solucion() {

    var a = document.getElementById("ra").value;
    var b = document.getElementById("rb").value;
    var x = document.getElementById("rx").value;

    if (a != "" && x != "" && b != "") {

        var f = 1 / b - a;
        console.log(1 / 4);
        var solucion = Number((f * b) - (f * x)).toFixed(2);

        var solucion_porcen = Number(solucion * 100).toFixed(2);

        document.getElementById("resul1").value = solucion;
        document.getElementById("resul2").value = solucion_porcen + "%";


    } else {

        document.getElementById("msg2").classList.add("mensaje-alerta2-show");
        document.getElementById("alerta2").classList.add("alert-danger");

    }


}


function mostrar() {

    var a = parseFloat(document.getElementById("ra").value || 0);
    var b = parseFloat(document.getElementById("rb").value || 0);
    var x = parseFloat(document.getElementById("rx").value || 0);


    if (a < b) {
        document.getElementById("inserta").value = a;
        document.getElementById("insertb").value = b;
        document.getElementById("inserta1").value = a;
        document.getElementById("insertb1").value = b;
        document.getElementById("insertli").value = x;
        document.getElementById("insertls").value = b;
        document.getElementById("insertli1").value = x;
        document.getElementById("insertls1").value = b;
        document.getElementById("insertli2").value = x;
        document.getElementById("insertls2").value = b;


    }

    if (x <= b && x >= a) {

        var f = 1 / (b - a);

        document.getElementById("insertf").value = f;
        document.getElementById("insertf1").value = f;
        document.getElementById("insertf2").value = f;
        document.getElementById("insertm1").value = f + "(" + x + ")";
        document.getElementById("insertm2").value = f + "(" + b + ")";

    } else {

        document.getElementById("insertf").value = 0;
        document.getElementById("insertf1").value = 0;
        document.getElementById("insertf2").value = 0;

    }

}

function limpiar() {
    document.getElementById("ra").value = "";
    document.getElementById("rb").value = "";
    document.getElementById("rx").value = "";
    document.getElementById("inserta").value = "";
    document.getElementById("insertb").value = "";
    document.getElementById("inserta1").value = "";
    document.getElementById("insertb1").value = "";
    document.getElementById("insertf").value = "";
    document.getElementById("insertf1").value = "";
    document.getElementById("insertf2").value = "";
    document.getElementById("insertli").value = "";
    document.getElementById("insertls").value = "";
    document.getElementById("insertli1").value = "";
    document.getElementById("insertls1").value = "";
    document.getElementById("insertli2").value = "";
    document.getElementById("insertls2").value = "";
    document.getElementById("insertm1").value = "";
    document.getElementById("insertm2").value = "";
    document.getElementById("resul1").value = "";
    document.getElementById("resul2").value = "";
}