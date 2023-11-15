//Constantes
let comentarios = document.querySelector(".comentario");
const container = document.querySelector("#container");
const next = document.querySelector("#next");
const back = document.querySelector("#back");
const quantPost = 10;
let start = 0;
let endpoint = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${quantPost}`;

//Função de Apagar HTML
const eraser = () => {
  comentarios.innerHTML = "";
  // console.clear();
}

//Função listpost
const listPost = (url) => {
  // console.log("esse é o start" + start, endpoint);
  
  fetch(url).then(response => response.json()).then(dados => {
    
      let id;
      let title;
      let body;
      // console.log(dados);
      for (let i = 0; i < dados.length; i++) {
        id = dados[i].id;
        title = dados[i].title;
        body = dados[i].body;

        // console.log(id);
        //respostas
        if (id % 2 !== 0) {
          comentarios.innerHTML += `<div class="comentario"> <h3 id="titulo${i}">${title}</h3>
          <p id="bodyComent${i}">Comentário: ${body}</p>
          <div id="c${i}">id_comentário: ${id}
          <p></p> </div> </div>
          
          `

        } else {
          let resp = document.getElementById(`c${i-1}`);
        resp.innerHTML += `
            <div class="Respostas">Resposta: ${body}
            <p id="c${i}">id_comentário: ${id}</p> </div>
            </div>
`
        }
      }
      // console.log(document);
    })
}


//First Call
listPost(endpoint);



//Buttons

next.addEventListener("click", () => {
  start += 10;
  endpoint = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${quantPost}`;


  console.log(start);

  listPost(endpoint);

  eraser();

  if (start >= 90) {
    next.disabled = true;


  }
  if (start >= 10) {
    back.disabled = false;


  } else {
    back.disabled = true;
  }



});

//Botoes Enable e Disnable
if (start >= 90) {
  next.disabled = true;


}
if (start >= 10) {
  back.disabled = false;


} else {
  back.disabled = true;
}

//Botão Back
back.addEventListener("click", () => {
  console.log("clicando");
  start -= 10;

  console.log("back=: " + start);

  //Botoes Enable e Disnable
  if (start >= 90) {
    next.disabled = true;


  } else {
    next.disabled = false;
  }
  if (start >= 10) {
    back.disabled = false;


  } else {
    back.disabled = true;
  }

  endpoint = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${quantPost}`;



  console.log("esse é o start Back: " + start);

  listPost(endpoint);

  eraser();

});



