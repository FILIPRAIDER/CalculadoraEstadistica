const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".navbar-nav");


navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav-menu_visible");


})

function mostrar() {
    var x = parseFloat(document.getElementById("rx").value) || 0;
    var k = parseFloat(document.getElementById("rk").value) || 0;
    var n = parseFloat(document.getElementById("rN").value) || 0;
    var n1 = parseFloat(document.getElementById("rn").value) || 0;

    document.getElementById("insertx").value = x;
    document.getElementById("insertx1").value = x;
    document.getElementById("insertx2").value = x;
    document.getElementById("insertk").value = k;
    document.getElementById("insertk1").value = k;
    document.getElementById("insertN").value = n;
    document.getElementById("insertN1").value = n;
    document.getElementById("insertn").value = n1;
    document.getElementById("insertn1").value = n1;

}

function cerrara2() {

    document.getElementById("msg2").classList.remove("mensaje-alerta2-show");
    document.getElementById("alerta2").classList.remove("alert-danger");


}


function limpiar() {
    document.getElementById("rx").value = "";
    document.getElementById("rk").value = "";
    document.getElementById("rN").value = "";
    document.getElementById("rn").value = "";
    document.getElementById("insertx").value = "";
    document.getElementById("insertx1").value = "";
    document.getElementById("insertx2").value = "";
    document.getElementById("insertk").value = "";
    document.getElementById("insertk1").value = "";
    document.getElementById("insertN").value = "";
    document.getElementById("insertN1").value = "";
    document.getElementById("insertn").value = "";
    document.getElementById("insertn1").value = "";
    document.getElementById("resul1").value = "";
    document.getElementById("resul2").value = "";
}


function factorial(n) {

    var total = 1;

    for (var i = 1; i <= n; i++) {

        total = total * i;

    }
    return total;

}

function solucion() {

    var x = document.getElementById("rx").value;
    var k = document.getElementById("rk").value;
    var n = document.getElementById("rN").value;
    var n1 = document.getElementById("rn").value;

    if (x != "" && k != "" && n != "" && n1 != "") {

        var x = parseFloat(document.getElementById("rx").value);
        var k = parseFloat(document.getElementById("rk").value);
        var n = parseFloat(document.getElementById("rN").value);
        var n1 = parseFloat(document.getElementById("rn").value);

        var res = n - k;
        var res2 = n1 - x;


        var solucion = Number((((factorial(k)) / (factorial(k - x) * factorial(x))) * ((factorial(res)) / (factorial(res - res2) * factorial(res2)))) / (((factorial(n)) / (factorial(n - n1) * factorial(n1))))).toFixed(4);
        console.log(solucion);
        var solucion_porcen = Number(solucion * 100).toFixed(2);

        document.getElementById("resul1").value = solucion;
        document.getElementById("resul2").value = solucion_porcen + "%";


    } else {

        document.getElementById("msg2").classList.add("mensaje-alerta2-show");
        document.getElementById("alerta2").classList.add("alert-danger");

    }


}