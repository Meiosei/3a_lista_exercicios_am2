// Quest 2
function filterPrimes(arr) {
 console.log(arr);
  let chave;
  let arrNew= [];
  let j=-1;
console.log("clicando");
console.log(arr.length);

  for(let i=0; i<arr.length; i++){
    j++;
    console.log( arr[i]);
    if (typeof arr[i] != "number") {
      console.log("O Vetor não é Composto só por números");
      return  resp.innerHTML= "O Vetor não é Composto só por números" }
    if (typeof arr[i] === "NaN") {
       console.log("digite um valor valido")
       return  resp.innerHTML= "Digite um valor valido" }
    if (arr[i] <= 2) { console.log("digite um numero maior que 2");
  i++; }
  
    for (let d = 2; d < arr[i]; d++) {
      // console.log(d);
      if (arr[i] % d === 0) {
  
        chave = false;
        console.log(chave);
         i++;
      
        //  if (typeof arr[i] != "number") {
        //   console.log("O Vetor não é Composto só por números");
        //   return  resp.innerHTML= "O Vetor não é Composto só por números" }
        // // return chave;
      }
      else {
        // console.log(arr[i]); 
        
          // console.log(j);
          // console.log(arr[i]);
          arrNew[j]=arr[i];
          // console.log(arrNew);
        
       
        chave = true;
        console.log("Essa chave é do teste logico:"+chave);
        // return chave; 
      }

    }
     console.log(arrNew)
    
  }
  return  resp.innerHTML= arrNew;
}
let resp= document.getElementById("resp");
const bq3 = document.getElementById("bq3");
let arrT= [3,7,5,2,"a"];
bq3.addEventListener("click", ()=>{
  filterPrimes(arrT);
}); 
// filterPrimes(arrT);

