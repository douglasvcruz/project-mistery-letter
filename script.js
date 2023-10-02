const createCard = document.getElementById('criar-carta');
const cardGenerated = document.getElementById('carta-gerada');
const inputText = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine2', 'magazine1'];
const width = ['medium', 'big', 'reallybig'];
const rotation = ['rotateright', 'rotateleft'];
const inclination = ['skewleft', 'skewright'];

const mathRound = (classe) => classe[Math.floor(Math.random() * classe.length)];

const forOfCardGenerator = () => {
  let count = 0;
  const values = inputText.value.split(' ');
  for (let i = 0; i < values.length; i += 1) {
    count += 1;
    const span = document.createElement('span');
    span.innerHTML = values[i];
    span.className = `${mathRound(style)} ${mathRound(width)} ${mathRound(
      rotation,
    )} ${mathRound(inclination)}`;
    span.addEventListener('click', (e) => {
      e.target.className = `${mathRound(style)} ${mathRound(
        width,
      )} ${mathRound(rotation)} ${mathRound(inclination)}`;
    });
    cardGenerated.appendChild(span);
  }
  return count;
};

const createCardGenerator = () => {
  cardGenerated.innerHTML = '';
  if (inputText.value.length === 0 || inputText.value === ' ') {
    cardGenerated.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    contador.innerHTML = forOfCardGenerator();
  }
};

createCard.addEventListener('click', createCardGenerator);
