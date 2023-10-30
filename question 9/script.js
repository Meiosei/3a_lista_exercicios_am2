document.querySelector("#result input").addEventListener("input", (event) => {
  const value = event.target.value;
  const numberName = readNumberPerExtense(value);
  if (!!numberName) {
    document.querySelector("#result p").innerText = `Resultado: ${numberName}`;
  } else {
    document.querySelector("#result p").innerText = "Valor inválido";
  }
});
