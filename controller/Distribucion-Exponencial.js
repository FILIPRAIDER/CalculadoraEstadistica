const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".navbar-nav");


navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav-menu_visible");


})

function mostrar() {
    var x = parseFloat(document.getElementById("rx").value) || 0;
    var e = parseFloat(document.getElementById("re").value) || 0;

    document.getElementById("insertx1").value = x;
    document.getElementById("insertx2").value = x;

    var l = Number(1 / e).toFixed(1);

    if (l == 0) {

        document.getElementById("insertl1").value = 0;

    } else {

        document.getElementById("insertl1").value = l;

    }

}

function limpiar() {

    document.getElementById("rx").value = "";
    document.getElementById("re").value = "";
    document.getElementById("insertx1").value = "";
    document.getElementById("insertx2").value = "";
    document.getElementById("insertl1").value = "";
    document.getElementById("resul1").value = "";
    document.getElementById("resul2").value = "";

}

function exponente(n, e) {

    var total = n;

    for (var i = 1; i < e; i++) {
        total = total * n;
    }

    return Number(total);
}

function solucion() {

    var x = document.getElementById("rx").value;
    var e = document.getElementById("re").value;

    if (x != "" && e != "") {


        x = parseFloat(document.getElementById("rx").value);
        e = parseFloat(document.getElementById("re").value);


        var eu = 2.7182;

        var solucion = Number(1 - (1 - eu ** (-1 / e * x))).toFixed(2);

        var solucion_porcen = Number(solucion * 100).toFixed(2);

        document.getElementById("resul1").value = solucion;
        document.getElementById("resul2").value = solucion_porcen + "%";


    } else {

        document.getElementById("msg2").classList.add("mensaje-alerta2-show");
        document.getElementById("alerta2").classList.add("alert-danger");

    }


}
function cerrara2() {

    document.getElementById("msg2").classList.remove("mensaje-alerta2-show");
    document.getElementById("alerta2").classList.remove("alert-danger");


}


