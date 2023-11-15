const arr = [
    { nome: "Arthur", idade: 20, nascimento: new Date("2003/08/20") },
    { nome: "Marcos", idade: 15, nascimento: new Date("2000/07/03") },
  ];
  
  function searchItems(key, value) {
    const newArray = [];
  
    arr.forEach(rodar);
  
    function rodar(index) {
      if (key === "nome") {
        if (index.nome == value) {
          newArray.push(index);
        } else {
          return null;
        }
      } else if (key === "idade") {
        if (index.idade == value) {
          newArray.push(index);
        } else {
          return null;
        }
      } else if (key === "nascimento") {
        if (index.nascimento.toString() === new Date(value).toString()) {
          newArray.push(index);
        } else {
          return null;
        }
      } else {
        return undefined;
      }
    }
  
    return newArray;
  }
  
  const result = searchItems("nome", "Arthur");
  console.log(result);
  