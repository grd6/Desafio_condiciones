let borde = document.getElementById("itemimg");
let btcalcular = document.querySelector("#bt1");
let btverificar = document.getElementById("bt2");
borde.addEventListener("click", changeColor);
btcalcular.addEventListener("click", calcular);
btverificar.addEventListener("click", verificar);

function changeColor() {
  if (document.getElementById("itemimg").style.borderColor == "")
    document.getElementById("itemimg").style.borderColor = "red";
  else document.getElementById("itemimg").style.borderColor = "";
}

function calcular() {
  let valor1 = document.getElementById("inp1");
  let valor2 = document.getElementById("inp2");
  let valor3 = document.getElementById("inp3");
  let total =
    parseInt(valor1.value) + parseInt(valor2.value) + parseInt(valor3.value);

  if (total >= 10)
    document.getElementById("p").innerHTML = "Llevas demasiados stickers";
  else {
    document.getElementById("p").innerHTML = "Llevas: " + total + "Und";
  }
}
function verificar() {
  let valor1 = document.getElementById("select1").value;
  let valor2 = document.getElementById("select2").value;
  let valor3 = document.getElementById("select3").value;

  password = valor1 + valor2 + valor3;

  if (password == "911") {
    document.getElementById("p2").innerHTML = "password 1 correcto";
  } else if (password == "714") {
    document.getElementById("p2").innerHTML = "password 2 correcto";
  } else document.getElementById("p2").innerHTML = "password incorrecto";
}

