const buttonGenerator = document.getElementById('criar-carta');
const cartGenerated = document.getElementById('carta-gerada');
const inputText = document.getElementById('carta-texto');

const addButtonGenerator = () => {
  cartGenerated.innerHTML = '';
  const values = inputText.value.split(' ');
  for (let i = 0; i < values.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = values[i];
    cartGenerated.appendChild(span);
  }
}

buttonGenerator.addEventListener('click', addButtonGenerator);
