const input = document.querySelector("#result input");
const result = document.querySelector("#result p");

input.addEventListener("input", (event) => {
  const value = event.target.value;
  const numberName = readNumberPerExtense(value);
  if (!!numberName) {
    result.innerText = `Resultado: ${numberName}`;
  } else {
    result.innerText = "Valor inválido";
  }
});
