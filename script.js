const buttonGenerator = document.getElementById('criar-carta');
const cartGenerated = document.getElementById('carta-gerada');
const inputText = document.getElementById('carta-texto');

const addButtonGenerator = () => {
  const classes = ['newspaper', 'magazine2', 'magazine1', 'medium', 'big',
  'reallybig', 'rotateright', 'rotateleft', 'skewleft', 'skewright'];
  cartGenerated.innerHTML = '';
  if (inputText.value.length === 0 || inputText.value === ' ') {
    cartGenerated.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const values = inputText.value.split(' ');
    for (let i = 0; i < values.length; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = values[i];
      span.className = classes[Math.floor(Math.random() * classes.length)]
      cartGenerated.appendChild(span);
    }
  }
};

buttonGenerator.addEventListener('click', addButtonGenerator);
