const colorMap = 'var(--color-map)';
const colorPlayer = 'var(--color-player)';
const botAut = document.querySelector('#botAut');

const initialMapForm = new Array(
  [0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10],
  [], [], [], [], [], [], [], [], [], [], [10],
  [0], [], [2], [3], [4], [], [6], [7], [8], [], [10],
  [0], [], [2], [], [4], [], [6], [], [], [], [10],
  [0], [], [2], [], [4], [], [6], [], [8], [9], [10],
  [0], [], [], [], [], [], [6], [], [], [], [10],
  [0], [1], [2], [], [4], [], [6], [], [8], [9], [10],
  [0], [], [], [], [4], [], [6], [], [], [], [10],
  [0], [], [2], [3], [4], [], [6], [], [8], [], [10],
  [0], [], [], [], [], [], [], [], [8], [], [],
  [0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10],
)

let mapForm = new Array(
	...initialMapForm
)

let arrAux = new Array();
const map = document.querySelector('#map');
let resultado = document.querySelector('#ResultMap');

//FUNÇÃO
const desenhaMapa = arr => {
  let y = 7;
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x][0]);

    if (typeof arr[x][0] === 'undefined') {
      //Espaço Vazio

      console.log('diferente');

      map.innerHTML += `<span class="espaco" id="espaco${x}"> </span>`;

      let espaco = document.querySelector(`#espaco${x}`);

      espaco.style.backgroundColor = colorMap;
      // espaco.style.position="absolute";
      // espaco.style.right=`${x*0.9}px`;
      // espaco.style.border = "1px solid black";
      espaco.style.width = 'var(--mw)';
      espaco.style.height = 'var(--mh)';
    } else {
      map.innerHTML += `<span class="muro" id="muro${x}"> </span>`;

      let muro = document.querySelector(`#muro${x}`);

      muro.style.backgroundColor = 'black';
      // muro.style.position="absolute";
      // muro.style.right=`${x*0.9}px`;
      muro.style.border = '1px solid black';
      muro.style.width = 'var(--mw)';
      muro.style.height = 'var(--mh)';
    }
  }
};

// } else {

//   map.innerHTML += `<span class="espaco" id="espaco${x}"> </span>`

//   let espaco = document.querySelector(`#espaco${x}${y}`);

//   espaco.style.backgroundColor = "white";
//   // espaco.style.position="absolute";
//   // espaco.style.right=`${x*0.9}px`;
//   espaco.style.border = "1px solid black";
//   espaco.style.width = "var(--mw)";
//   espaco.style.height = "var(--mh)";

// }

//FIRST CALL
desenhaMapa(mapForm);

const caminhar = () => {
  let x = 0;
  let step = 0;
  espaco = document.querySelector(`#espaco${step + 11}`);

  espaco.style.backgroundColor = colorPlayer;

  let interval = setInterval(() => {
    x++;
    console.log(step);
    let NextEspaco = document.querySelector(`#espaco${step + 12}`);
    let NextEspacoDown = document.querySelector(`#espaco${step + 11 + 11}`);
    let NextEspacoLeft = document.querySelector(`#espaco${step - 12}`);
    let NextEspacoUp = document.querySelector(`#espaco${step - 11}`);

    let bug = document.querySelector(`#espaco85`);

    if (espaco.id === 'espaco109') {
      resultado.innerHTML = 'Você venceu';
      clearInterval(interval);
      return console.log('YOU WIN!');
    }

    if (NextEspacoDown !== null) {
      step += 11;

      console.log('step Down: ' + step);
      BackEspaco = document.querySelector(`#espaco${step}`);
      espaco = document.querySelector(`#espaco${step + 11}`);
      console.log(step + 11);
      console.log('Down arrow!');
      espaco.style.backgroundColor = colorPlayer;
      //apagar traço anterior
      BackEspaco.style.backgroundColor = colorMap;
      bug.style.backgroundColor = colorMap;
      if (espaco.id === 'espaco109') {
        return console.log('YOU WIN!');
      }
    }

    //Right
    else if (NextEspaco !== null) {
      step += 1;
      console.log('step  ' + step);
      BackEspaco = document.querySelector(`#espaco${step - 1 + 11}`);
      espaco = document.querySelector(`#espaco${step + 11}`);
      console.log(step + 11);
      console.log('Right arrow!');
      espaco.style.backgroundColor = colorPlayer;
      //apagar traço anterior
      BackEspaco.style.backgroundColor = colorMap;
      bug.style.backgroundColor = colorMap;
    }

    //Left
    else if (NextEspacoLeft !== null) {
      step -= 2;
      console.log('step left ' + step);
      BackEspaco = document.querySelector(`#espaco${step + 2 + 11}`);
      espaco = document.querySelector(`#espaco${step + 11}`);
      console.log(step + 11);
      console.log('Leftarrow!');
      espaco.style.backgroundColor = colorPlayer;
      //apagar traço anterior
      BackEspaco.style.backgroundColor = colorMap;
      if (espaco.id === 'espaco109') {
        return console.log('YOU WIN!');
      }
    }

    //UP
    else if (NextEspacoUp !== null) {
      step -= 10;

      console.log('step Up: ' + step);
      BackEspaco = document.querySelector(`#espaco${step + 10 + 11}`);
      espaco = document.querySelector(`#espaco${step}`);
      console.log(step + 11);
      console.log('Uparrow!');
      espaco.style.backgroundColor = colorPlayer;
      //apagar traço anterior
      BackEspaco.style.backgroundColor = colorMap;
      if (espaco.id === 'espaco109') {
        document.innerHTML += '<p>Você Venceu</p>';
        return console.log('YOU WIN!');
      }
    }
  }, 100);
  {
  }
};

//CONTROLES
const controls = () => {
  let step = 0;
  let espaco = document.querySelector(`#espaco${step + 11}`);
  console.log(espaco);
  espaco.style.backgroundColor = colorPlayer;

  document.addEventListener(
    'keydown',

    function (event) {
      const key = event.key;

      switch (key) {
        case 'ArrowLeft':
          NextEspaco = document.querySelector(`#espaco${step + 11 - 1}`);

          if (NextEspaco == null) {
            return console.log('Aqui Nao');
          }
          BackEspaco = document.querySelector(`#espaco${step + 11}`);
          step -= 1;
          espaco = document.querySelector(`#espaco${step + 11}`);
          console.log(step + 11);
          console.log('Left arrow!');
          espaco.style.backgroundColor = colorPlayer;
          //apagar traço anterior
          BackEspaco.style.backgroundColor = colorMap;
          break;
        case 'ArrowRight':
          NextEspaco = document.querySelector(`#espaco${step + 12}`);

          if (NextEspaco == null) {
            return console.log('Aqui Nao');
          }
          step += 1;
          BackEspaco = document.querySelector(`#espaco${step - 1 + 11}`);
          espaco = document.querySelector(`#espaco${step + 11}`);
          console.log(step + 11);
          console.log('Right arrow!');
          espaco.style.backgroundColor = colorPlayer;
          //apagar traço anterior
          BackEspaco.style.backgroundColor = colorMap;
          if (espaco.id === 'espaco109') {
            resultado.innerHTML = 'Você venceu';

            return console.log('YOU WIN!');
          }
          break;

        case 'ArrowUp':
          NextEspaco = document.querySelector(`#espaco${step}`);
          if (NextEspaco == null) {
            return console.log('Aqui Nao');
          }

          step -= 11;
          BackEspaco = document.querySelector(`#espaco${step + 11 + 11}`);
          espaco = document.querySelector(`#espaco${step + 11}`);

          console.log(step + 11);
          console.log('UP arrow!');
          espaco.style.backgroundColor = colorPlayer;

          //apagar traço anterior
          BackEspaco.style.backgroundColor = colorMap;
          break;

        case 'ArrowDown':
          NextEspaco = document.querySelector(`#espaco${step + 11 + 11}`);
          if (NextEspaco == null) {
            return console.log('Aqui Nao');
          }

          step += 11;
          BackEspaco = document.querySelector(`#espaco${step}`);

          espaco = document.querySelector(`#espaco${step + 11}`);

          // console.log(typeof NextEspaco.id);

          console.log(espaco.id);
          console.log(`espaco${step + 11}`);

          console.log(step + 11);
          console.log('Down arrow!');
          espaco.style.backgroundColor = colorPlayer;
          //apagar traço anterior
          BackEspaco.style.backgroundColor = colorMap;

          break;
      }
    },
  );
};

botAut.addEventListener('click', () => {
  let espaco = document.getElementById('espaco109');
  resultado.innerHTML = 'Resultado';
  espaco.style.backgroundColor = colorMap;

  mapForm = new Array(...initialMapForm);
  desenhaMapa(mapForm);
  caminhar();
});
botControl.addEventListener('click', () => {
  let espaco = document.getElementById('espaco109');
  resultado.innerHTML = 'Resultado';
  espaco.style.backgroundColor = colorMap;

  mapForm = new Array(...initialMapForm);
  desenhaMapa(mapForm);
  controls();
});
