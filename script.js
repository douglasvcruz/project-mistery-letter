const buttonGenerator = document.getElementById('criar-carta');
const cartGenerated = document.getElementById('carta-gerada');
const inputText = document.getElementById('carta-texto');
const sty = ['newspaper', 'magazine2', 'magazine1'];
const wid = ['medium', 'big', 'reallybig'];
const rot = ['rotateright', 'rotateleft'];
const inc = ['skewleft', 'skewright'];

const mathRound = (classe) => classe[Math.floor(Math.random() * classe.length)];

const addButtonGenerator = () => {
  cartGenerated.innerHTML = '';
  if (inputText.value.length === 0 || inputText.value === ' ') {
    cartGenerated.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const values = inputText.value.split(' ');
    for (let i = 0; i < values.length; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = values[i];
      span.className = `${mathRound(sty)} ${mathRound(wid)} ${mathRound(rot)} ${mathRound(inc)}`;
      span.addEventListener('click', (e) => {
        e.target
          .className = `${mathRound(sty)} ${mathRound(wid)} ${mathRound(rot)} ${mathRound(inc)}`;
      });
      cartGenerated.appendChild(span);
    }
  }
};

buttonGenerator.addEventListener('click', addButtonGenerator);
