const navToggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".navbar-nav");


navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav-menu_visible");


})




function factorial(n) {

    var total = 1;

    for (var i = 1; i <= n; i++) {

        total = total * i;

    }
    return total;

}

function mostrar() {
    var p = parseFloat(document.getElementById("rp").value);
    var x = parseFloat(document.getElementById("rx").value) || 0;
    var n = parseFloat(document.getElementById("rn").value) || 0;

    document.getElementById("insertk").value = x;
    document.getElementById("insertk1").value = x;
    document.getElementById("insertk2").value = x;
    document.getElementById("insertk3").value = x;
    document.getElementById("insertk4").value = x;
    document.getElementById("insertn1").value = n;
    document.getElementById("insertn2").value = n;
    document.getElementById("insertn3").value = n;

}

function limpiar() {
    document.getElementById("rp").value = "";
    document.getElementById("rx").value = "";
    document.getElementById("rn").value = "";
    document.getElementById("insertk").value = "";
    document.getElementById("insertk1").value = "";
    document.getElementById("insertk2").value = "";
    document.getElementById("insertk3").value = "";
    document.getElementById("insertk4").value = "";
    document.getElementById("insertn1").value = "";
    document.getElementById("insertn2").value = "";
    document.getElementById("insertn3").value = "";
    document.getElementById("resul1").value = "";
    document.getElementById("resul2").value = "";
}

function solucion() {

    var p = document.getElementById("rp").value;
    var x = document.getElementById("rx").value;
    var n = document.getElementById("rn").value;

    if (p != "" && x != "" && n != "") {

        //aca recibimos los numeros ingresados por el usuario y los guardamos en variables 

        p = parseFloat(document.getElementById("rp").value);
        x = parseFloat(document.getElementById("rx").value);
        n = parseFloat(document.getElementById("rn").value);

        //aca simplemente escribimos la formula teniendo en cuenta los parentesis y diferentes signos usados en este lenguaje

        var solucion = Number((factorial(n) / (factorial(x) * factorial(n - x))) * p ** x * (1 - p) ** (n - x)).toFixed(4);

        //aca tomamos la solucion y la multiplicamos por 100 para obtener el resultado en porcentaje

        var solucion_porcen = Number(solucion * 100).toFixed(2);

        //y por ultimo tomamos tanto la solucion como la solucion en porcentaje y las mostramos en los respectivos inputs

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

function alerta() {

    var p = parseFloat(document.getElementById("rp").value);

    if (p > 1 || p < 0) {

        document.getElementById("msg").classList.add("mensaje-alerta-show");
        document.getElementById("alerta").classList.add("alert-danger");
        document.getElementById("rp").value = "";

    } else {

        document.getElementById("msg").classList.remove("mensaje-alerta-show");
        document.getElementById("alerta").classList.remove("alert-danger");


    }


}
