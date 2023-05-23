const css = `
    <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    </style>
`;

const template = document.createElement('template');
template.innerHTML += `
    ${css}
    <div class='container'>
      <ul id="interview-chat-list"></ul>
      <input type="text" name="message" id="user-message">
      <button id="btn-send">Enviar</button>
    </div>
`;

class interviewChat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // const template = document.getElementById('interview-chat-template');
    const instance = template.content.cloneNode(true);

    const ul = instance.querySelector('#interview-chat-list');
    const boton = instance.querySelector('#btn-send');
    const userMessage = instance.querySelector('#user-message');

    function addMessage(message) {
      const newMessage = document.createElement('li');
      newMessage.textContent = message;

      ul.appendChild(newMessage);
    }

    setTimeout(() => {
      addMessage('Hola te ayudare a practicar para una entrevista de trabajo relacionada con este oferta.');
    }, 1000);

    setTimeout(() => {
      addMessage('Estoy analizando la descripcion y redactando las 5 preguntas mas comunes...');
    }, 2000);

    boton.addEventListener('click', () => {
      addMessage(userMessage.value);
    });

    this.shadowRoot.appendChild(instance);
  }
}

window.customElements.define('interview-chat', interviewChat);
