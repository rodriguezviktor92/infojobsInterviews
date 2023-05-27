/* eslint-disable comma-dangle */
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
      <ul id='interview-chat-list'></ul>
      <input type='text' name='message' id='user-message'>
      <button id='btn-send'>Enviar</button>
    </div>
`;

class interviewChat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.conversation = '';
  }

  connectedCallback() {
    // const template = document.getElementById('interview-chat-template');
    const instance = template.content.cloneNode(true);

    const boton = instance.querySelector('#btn-send');
    const userMessage = instance.querySelector('#user-message');

    boton.addEventListener('click', () => {
      this.addMessage(userMessage.value);
    });

    this.shadowRoot.appendChild(instance);
  }

  addMessage(message) {
    const ul = this.shadowRoot.querySelector('#interview-chat-list');

    const newMessage = document.createElement('li');
    newMessage.textContent = message;

    ul.appendChild(newMessage);
  }

  welcome() {
    const description = {
      description:
        'Programador para desarrollo de aplicaciones informáticas enfocadas en el ámbito industrial, con conocimientos tanto de front end como de back end.    Se valorarán conocimientos y experiencia en:        · Angular / AngularJS    · Javascript    · HTML5    · HTML / CSS    · C#    · HTTP & REST    · jQuery    · LINQ    · SQL    · Bootstrap    · Node.js    · Lenguaje SASS    · Visual Studio    · SQL Server        Se requiere buena disposición para trabajo en equipo.    La actividad se realizará fundamentalmente con carácter presencial en nuestras instalaciones de Ourense, con disponibilidad para desplazarse dentro y fuera de España.        Se ofrece:    · Incorporación inmediata a un equipo de trabajo con amplia experiencia en desarrollo de aplicaciones informáticas para la industria    · Formación continua    · Estabilidad y buen ambiente labora',
    };
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData('http://localhost:3000/message/new', description).then((data) => {
      this.conversation = data.conversation;
      this.addMessage(JSON.parse(data.message).pregunta);
    });

    setTimeout(() => {
      this.addMessage(
        'Hola te ayudare a practicar para una entrevista de trabajo relacionada con este oferta.'
      );
    }, 1000);

    setTimeout(() => {
      this.addMessage(
        'Estoy analizando la descripcion y redactando las 5 preguntas mas comunes...'
      );
    }, 2000);
  }
}

window.customElements.define('interview-chat', interviewChat);
