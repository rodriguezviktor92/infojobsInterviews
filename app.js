function toggleOverlay(overlayElement) {
  overlayElement.classList.toggle('display');
}

(() => {
  const divContainer = document.querySelector('.hide-small-device.inner');
  const btnInterview = document.createElement('button');

  divContainer.classList.add('flex');
  btnInterview.innerText = 'Simular Entrevista';
  btnInterview.classList.add('btn', 'btn-primary');
  btnInterview.style.margin = '0';

  divContainer.appendChild(btnInterview);

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'display');

  const chat = document.createElement('interview-chat');

  overlay.prepend(chat);

  btnInterview.addEventListener('click', () => toggleOverlay(overlay));

  btnInterview.addEventListener('click', () => {
    chat.welcome();
  });

  document.body.appendChild(overlay);
})();
