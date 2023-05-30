/* eslint-disable comma-dangle */
const css = `
    <style>
    .container {
      display: flex;
      align-items: end;
      height: 100vh;
      gap: 10px;
      padding: 0 10px;
      /* temporal */
      background-image: url('https://i.ibb.co/Lr23rMX/descarga.webp');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .chat-interview-container {
      background-color: rgb(98 98 98 / 50%);
      backdrop-filter: blur(10px);
      padding: 15px;
      border-radius: 8px 8px 0px 0px;
      flex-basis: 450px;
    }
    .chat-call-container {
      position: relative;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding-bottom: 30px;
      align-items: center;
      flex-grow: 1;
    }
    .icon-send:before {
      content: '\f1d8';
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 70%;
      border: none;
      font-size: 31px;
      height: 1.8em;
      width: 1.8em;
      box-shadow: 0 2px 4px darkslategray;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: bold;
      color: white;
      background-color: rgb(98 98 98 / 50%);
      backdrop-filter: blur(10px);
    }
    .btn-call {
      background-color: rgb(255 0 0 / 50%);
    }
    .btn-call-container {
      gap: 6px;
      display: flex;
    }

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    li {
      background-color: #DAB84B;
      backdrop-filter: blur(10px);
      border-radius: 10px;
      padding: 9px;
      max-width: 60%;
      color: #ffffff;
    }

    .user-message {
      background-color: #84B29E;
      align-self: flex-end;
    }
    .user-message-input {
      background-color: rgb(98 98 98 / 50%);
      backdrop-filter: blur(10px);
      border: 0;
      padding: 15px;
      border-radius: 5px;
      width: -webkit-fill-available;
      font-size: 16px;
      color: #ffffff;
    }
    .user-message-input::placeholder{
      color: #ffffff;
      opacity: 0.7;
    }
    .user-message-input:focus {
      outline: none;
    }
    .input-footer {
      display: flex;
      padding-top: 5px;
      border-top: 1px solid;
    }
    .user-message-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: 0;
      color: white;
    }
    .chat-interview-header {
      height: 150px;
      overflow: auto;
    }

    .chat-interview-header::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
    }

    .chat-interview-header::-webkit-scrollbar
    {
      width: 7px;
    }

    .chat-interview-header::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }
    .container-video {
      position: relative;
      display: flex;
      flex-basis: 450px;
      background-image: url(https://filestore.community.support.microsoft.com/api/images/16b67ad7-b23b-48d4-bf33-f326adbf3ab6);
      background-size: cover;
      border-radius: 10px;
    }
    #vid{
      height: 232px;
      object-fit: cover;
      flex-basis: 450px;
      border-radius: 10px;
    }
    .btn-disabled {
      color: black;
    }
    .btn-speak {
      /*display: none;*/
      position: absolute;
    }
    </style>
`;

const template = document.createElement('template');
template.innerHTML += `
    ${css}
    <div id='myDiv' style='width: 100vw;height: 100vh;position: absolute;display: flex;justify-content: center;align-items: end;'></div>
      <button id='btn-preload' class='btn-speak'>preload</button>
      <button id='btn-speak' class='btn-speak'>Speak</button>
      <div class='container'>
          <section id='chat-interview' class='chat-interview-container'>
            <header class='chat-interview-header'>
              <ul id='interview-chat-list'></ul>
            </header>
            <footer class='input-footer'>
              <input type='text' name='message' id='user-message' class='user-message-input' placeholder='Escribe tu respuesta aquí' />
              <button id='btn-send' class='user-message-btn'>
              <svg height='20px' version='1.1' id='Icons' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
              viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'>
              <path d='M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10
                c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2
                C29.7,3.3,29.6,2.9,29.3,2.6z' style='fill: currentColor'/>
              </svg>
              </button>
            </footer>
          </section>
          <section id='call' class='chat-call-container'>
            <div class='btn-call-container'>
              <button class='btn btn-disabled' id='btn-stop-camera'>
                <svg
                  height='20px'
                  id='Layer_1'
                  data-name='Layer 1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                >
                  <path
                    class='cls-1'
                    d='M125.83556,87.42125a3.48687,3.48687,0,0,1-3.43167,3.49294H108.05205L93.492,79.3813V89.70086A8.85548,8.85548,0,0,1,84.64306,98.562H11.01333a8.85548,8.85548,0,0,1-8.84889-8.86116V38.29907A8.85542,8.85542,0,0,1,11.01333,29.438H84.64306A8.85542,8.85542,0,0,1,93.492,38.29907v10.246l14.5969-11.45936h14.315a3.44713,3.44713,0,0,1,3.43167,3.41941Z'
                    id='id_101'
                    style='fill: currentColor'
                  ></path>
                </svg>
              </button>
                <button class='btn'>
                <svg height='20px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='475.085px' height='475.085px' viewBox='0 0 475.085 475.085' style='enable-background:new 0 0 475.085 475.085;' xml:space='preserve'>
                <g>
                  <path d='M237.541,328.897c25.128,0,46.632-8.946,64.523-26.83c17.888-17.884,26.833-39.399,26.833-64.525V91.365
                    c0-25.126-8.938-46.632-26.833-64.525C284.173,8.951,262.669,0,237.541,0c-25.125,0-46.632,8.951-64.524,26.84
                    c-17.893,17.89-26.838,39.399-26.838,64.525v146.177c0,25.125,8.949,46.641,26.838,64.525
                    C190.906,319.951,212.416,328.897,237.541,328.897z' id='id_101' style='fill: rgb(255, 255, 255);'></path>
                  <path d='M396.563,188.15c-3.606-3.617-7.898-5.426-12.847-5.426c-4.944,0-9.226,1.809-12.847,5.426
                    c-3.613,3.616-5.421,7.898-5.421,12.845v36.547c0,35.214-12.518,65.333-37.548,90.362c-25.022,25.03-55.145,37.545-90.36,37.545
                    c-35.214,0-65.334-12.515-90.365-37.545c-25.028-25.022-37.541-55.147-37.541-90.362v-36.547c0-4.947-1.809-9.229-5.424-12.845
                    c-3.617-3.617-7.895-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426c-3.618,3.616-5.426,7.898-5.426,12.845v36.547
                    c0,42.065,14.04,78.659,42.112,109.776c28.073,31.118,62.762,48.961,104.068,53.526v37.691h-73.089
                    c-4.949,0-9.231,1.811-12.847,5.428c-3.617,3.614-5.426,7.898-5.426,12.847c0,4.941,1.809,9.233,5.426,12.847
                    c3.616,3.614,7.898,5.428,12.847,5.428h182.719c4.948,0,9.236-1.813,12.847-5.428c3.621-3.613,5.431-7.905,5.431-12.847
                    c0-4.948-1.81-9.232-5.431-12.847c-3.61-3.617-7.898-5.428-12.847-5.428h-73.08v-37.691
                    c41.299-4.565,75.985-22.408,104.061-53.526c28.076-31.117,42.12-67.711,42.12-109.776v-36.547
                    C401.998,196.049,400.185,191.77,396.563,188.15z' id='id_102' style='fill: rgb(255, 255, 255);'></path>
                </g>
              </svg>
                </button>
              <button class='btn'>
                <svg height='20px' version='1.1' id='Icons' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'>
                <g>
                  <path d='M20.4,2.9c-0.3-0.2-0.7-0.1-1,0.1L9.7,10H3c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h6.7l9.7,7.1c0.2,0.1,0.4,0.2,0.6,0.2
                    c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.9V3.8C21,3.4,20.8,3,20.4,2.9z' id='id_101' style='fill: rgb(255, 255, 255);'></path>
                  <path d='M27.1,9.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4C27.2,12.1,28,14,28,16s-0.8,3.9-2.3,5.3c-0.4,0.4-0.4,1,0,1.4
                    c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C29,20.9,30,18.6,30,16S29,11.1,27.1,9.3z' id='id_102' style='fill: rgb(255, 255, 255);'></path>
                  <path d='M24.7,12.7c-0.4-0.4-1-0.4-1.4,0.1c-0.4,0.4-0.3,1,0.1,1.4c0.5,0.5,0.8,1.2,0.8,1.9s-0.3,1.4-0.8,1.9
                    c-0.4,0.4-0.4,1-0.1,1.4c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3c1-0.9,1.5-2.1,1.5-3.3S25.6,13.5,24.7,12.7z' id='id_103' style='fill: rgb(255, 255, 255);'></path>
                </g>
                </svg>
              </button>
              <button class='btn btn-call'>
              <svg height='20px' id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
                <path class='cls-1' d='M123.28788,96.79737,100.78819,80.34893a6.26082,6.26082,0,0,0-8.08382.58949l-12.02065,11.805-.04092.04092a5.33619,5.33619,0,0,1-7.50362-.08369L52.35966,71.92108,35.2994,54.86081a5.33619,5.33619,0,0,1-.08369-7.50362l.04092-.04092,11.805-12.02065a6.26082,6.26082,0,0,0,.58949-8.08382L31.20263,4.71212a6.26247,6.26247,0,0,0-9.48412-.73271l-8.47993,8.47993q-.80336.80336-1.5342,1.66808C10.14787,15.9666,6.77822,20.09128,5.49694,22.745a34.59493,34.59493,0,0,0,5.73882,38.17081l55.84846,55.84846a34.59493,34.59493,0,0,0,38.17081,5.73882c2.65369-1.28128,6.77836-4.65093,8.61754-6.20744q.86472-.73083,1.66808-1.5342l8.47993-8.47993A6.26247,6.26247,0,0,0,123.28788,96.79737Z' id='id_101' style='fill: rgb(255, 255, 255);'></path>
              </svg>
              </button>
            </div>
          </section>
          <div class='container-video'>
              <video id="vid"></video>
          </div>
        </div>`;

class interviewChat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.conversation = '';
    this.character = '';
    this.camera = false;
    this.chatActive = false;
    this.disabledBtn = false;
  }

  connectedCallback() {
    // const template = document.getElementById('interview-chat-template');
    const instance = template.content.cloneNode(true);

    const boton = instance.querySelector('#btn-send');
    const userMessage = instance.querySelector('#user-message');

    boton.addEventListener('click', () => {
      this.sendUserMessage(userMessage.value);
      userMessage.value = '';
    });

    const btnCall = instance.querySelector('.btn-call');
    const btnPreload = instance.querySelector('#btn-preload');
    const btnSpeak = instance.querySelector('#btn-speak');
    
    const btnStopCamera = instance.querySelector('#btn-stop-camera');

    //prettier-ignore
    btnCall.addEventListener('click', () => this.handlerCloseChat());
    btnPreload.addEventListener('click', () => this.preload());
    btnSpeak.addEventListener('click', () => this.speak());
    btnStopCamera.addEventListener('click', () => this.handlerCamera());

    this.shadowRoot.appendChild(instance);
  }

  sendUserMessage(userMessage) {
    if (!this.disabledBtn) {
      this.addMessage(userMessage, 'user');
      const newMessage = {
        message: {
          role: 'user',
          content: userMessage,
        },
      };
      this.postData(
        `https://infojobs-interviews.vercel.app/message/${this.conversation}`,
        newMessage
      ).then((data) => {
        function isJSON(str) {
          try {
            return { lastQuestion: false, value: JSON.parse(str).pregunta };
          } catch (e) {
            return { lastQuestion: true, value: str };
          }
        }
        const message = isJSON(data.message);
        this.addMessage(message.value, 'assistant');
        if (message.lastQuestion) this.feedback();
      });
    }
  }

  addMessage(message, type = '') {
    const chatContainer = this.shadowRoot.querySelector(
      '.chat-interview-header'
    );
    const ul = this.shadowRoot.querySelector('#interview-chat-list');

    const newMessage = document.createElement('li');
    if (type === 'user') newMessage.classList.add('user-message');
    newMessage.textContent = message;

    ul.appendChild(newMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    // if (type === 'assistant') this.character.dynamicPlay({ say: message });
  }

  feedback() {
    this.disabledBtn = true;

    this.addMessage('¿Te gustaria recibir un feedback sobre esta simulacion de entrevista?', 'assistant');
    const ul = this.shadowRoot.querySelector('#interview-chat-list');

    const feedbackLink = document.createElement('a');
    feedbackLink.textContent = 'Si dame un feedback sobre la entrevista.';
    feedbackLink.classList.add('feedback-link');

    ul.appendChild(feedbackLink);

    feedbackLink.addEventListener('click', () => this.getFeedback());
  }

  getFeedback() {
    this.postData(`https://infojobs-interviews.vercel.app/feedback/${this.conversation}`).then((data) => {
      this.addMessage(JSON.parse(data.message).pregunta, 'assistant');
    });
  }

  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  getCurrentOfferId () {
    const currentOffer = window.location.href;
    const regex = /of-i(\w+)/;
    const match = currentOffer.match(regex);
    const offerId = match[1];

    return offerId;
  }

  preload() {
  }

  speak(message) {
    this.character.dynamicPlay({ say: message });
  }

  handlerCloseChat() {
    const video = this.shadowRoot.getElementById('vid');
    this.stopStreamedVideo(video);
    this.toggleOverlay();
  }

  toggleOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('display');
  }

  handleInitChat() {
    this.toggleOverlay();
    if (!this.chatActive) this.welcome();
  }

  welcomeMessage() {
    const offerId = {
      value: this.getCurrentOfferId(),
    };

    this.postData('https://infojobs-interviews.vercel.app/message/new', offerId).then((data) => {
      this.conversation = data.conversation;
      this.addMessage(JSON.parse(data.message).pregunta, 'assistant');
    });

    setTimeout(() => {
      const message = '¡Hola! Te ayudaré a practicar para una entrevista de trabajo relacionada con esta oferta.';
      this.speak(message);
      this.addMessage(message, 'assistant');
    }, 1000);

    setTimeout(() => {
      const message = 'Estoy analizando la descripción y redactando las 5 preguntas más comunes...';
      this.speak(message);
      this.addMessage(message, 'assistant');
    }, 2000);
  }

  welcome() {
    this.shadowRoot.getElementById('myDiv')
      .addEventListener('characterLoaded', () => this.welcomeMessage());

    this.chatActive = true;

    this.character = CharApiClient.setupDiv('myDiv', {
      width: 751,
      height: 601,
      // TODO: Replace this with your own endpoint on your own server. 
      endpoint: 'https://charapi-production.up.railway.app/animate',
      // Character API parameters. TODO: If your api works without authentication, e.g. if your page is accessible without a login, then it is wise 
      // to *fix* or *limit* as many parameters as you can in your server code, including a background with a logo, if you can, 
      // in order to minimize the attractiveness of your endpoint for scammers. (CORS helps with this, but it can still be defeated.)
      character: 'MichelleHead',
      // Character version - get this from the character catalog
      version: '1.5',
      // Character idle pattern - get this from the character catalog
      idleData: {'blink':['blink'],'normal':['idle1']},
      // Increment the 'cache' value if you make changes to the parameters you fix in your server.
      // Even if you delete your server-side cache, your clients may have images in their client cache. Incrementing the
      // cache number in the client is a simple way to ensure that neither client or server-cached images are accidentally used.
      cache: 1
    });

    this.startStreamedVideo();
  }

  handlerCamera() {
    if (this.camera) {
      const video = this.shadowRoot.getElementById('vid');
      this.stopStreamedVideo(video);
    } else {
      this.startStreamedVideo();
    }
  }

  startStreamedVideo() {
    const { mediaDevices } = navigator;
    const video = this.shadowRoot.getElementById('vid');

    mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        // Changing the source of video to current stream.
        video.srcObject = stream;
        this.togglerBtnCammera();
        video.addEventListener('loadedmetadata', () => {
          video.play();
          this.camera = true;
        });
      })
      .catch((e) => console.log('video error: ', e));
  }

  stopStreamedVideo(videoElem) {
    const stream = videoElem.srcObject;
    if (stream) {
      const tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
      this.camera = false;
      this.togglerBtnCammera();
      videoElem.srcObject = null;
    }
  }

  togglerBtnCammera() {
    const btnStopCamera = this.shadowRoot.getElementById('btn-stop-camera');
    btnStopCamera.classList.toggle('btn-disabled');
  }
}


window.customElements.define('interview-chat', interviewChat);
