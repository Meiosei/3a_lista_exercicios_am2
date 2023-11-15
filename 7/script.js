let comentarios = document.querySelector(".comentario");
const container = document.querySelector("#container");
const next = document.querySelector("#next");
const back = document.querySelector("#back");
const quantPost = 10;
let start = 0;
let endpoint = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${quantPost}`;

const eraser = () => {
  comentarios.innerHTML = "";
}

const listPost = (url) => {

  console.log("esse é o start" + start, endpoint);


  fetch(url).then(
    response => response.json()).then(dados => {
      let id;
      let title;
      let body;
      console.log(dados);
      for (let i = 0; i < dados.length; i++) {
        id = dados[i].id;
        title = dados[i].title;
        body = dados[i].body;


        console.log(id);

        comentarios.innerHTML += `<div class="comentario">

          <h3 id="titulo${i}">${title}</h3>
          <p id="bodyComent${i}">${body}</p>
          <p id="c${i}">id_comentário: ${id}</p>

        </div>
        `
      }

      console.log(document);
    })

}

listPost(endpoint);

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

if (start >= 90) {
  next.disabled = true;

}
if (start >= 10) {
  back.disabled = false;

} else {
  back.disabled = true;
}

back.addEventListener("click", () => {
  console.log("clicando");
  start -= 10;

  console.log("back=: "+start);
  
  if (start >= 90) {
    next.disabled = true;

  }else{ next.disabled = false;
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

const userIdInput = document.querySelector("#userIdInput");
const filterButton = document.querySelector("#filterButton");

const listPostsByUser = (userId) => {
  eraser();

  const endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((dados) => {
      for (let i = 0; i < dados.length; i++) {
        const id = dados[i].id;
        const title = dados[i].title;
        const body = dados[i].body;
        const postUserId = dados[i].userId;

        comentarios.innerHTML += `<div class="comentario">
          <h3 id="titulo${i}">${title}</h3>
          <p id="bodyComent${i}">${body}</p>
          <p id="c${i}">id_comentário: ${id}</p>
        </div>`;
      }
    });
};

filterButton.addEventListener("click", () => {
  const inputUserId = parseInt(userIdInput.value, 10);
  
  if (isNaN(inputUserId) || inputUserId < 1 || inputUserId > 10) {
    alert("Informe um número de 1 a 10.");
    return;
  }

  listPostsByUser(inputUserId);
  eraser();
});
