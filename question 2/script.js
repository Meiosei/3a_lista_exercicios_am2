// Quest 2
function isPrime() {
  let caixaTexto = document.getElementById("q2N");
  let n = Number(caixaTexto.value)
  let chave;
  // console.log("clicando");
  //   console.log( n+2);
  if (n === 0) { return console.log("digite um numero"); }
  if (typeof n === "NaN") { return console.log("digite um valor valido") }
  if (n <= 2) { console.log("digite um numero maior que 2"); }

  for (let d = 2; d < n; d++) {
    // console.log(d);
    if (n % d === 0) {

      chave = false;
      console.log(chave);
      return chave;

    }
    else { chave = true; }
  }
  console.log(chave);
}
const bq2 = document.getElementById("bq2");
bq2.addEventListener("click", isPrime);

