/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
const {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi,
} = require('openai');
const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Message = require('./models/message');
const Conversation = require('./models/conversation');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(bodyParse.json());
app.use(cors());

const config = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(config);

function getLastMessage(messages) {
  const assistantMessage = messages.filter(
    (message) => message.role === 'assistant'
  );
  return JSON.parse(assistantMessage[assistantMessage.length - 1].content)
    .numeroDePregunta;
}

const INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: `Quiero que actúes como entrevistador siguiendo estas instrucciones: 
    1: Solo realiza la pregunta no hagas comentarios ni textos adicionales
    2: Cada pregunta debe seguir estar en formato JSON: { "pregunta": "¿cuales son tus conocimientos de html y js?",  "numeroDePregunta": 1 }
    3: Espera mi respuesta antes de hacer otra pregunta.    
    4: La entrevista debe ser basado en esta descripcion: `,
  },
];

app.post('/message/:id', (req, res) => {
  if (req.params.id === 'new') {
    new Conversation().save().then((conversation) => {
      INITIAL_MESSAGES[0].content += req.body.description;

      Message.insertMany([
        ...INITIAL_MESSAGES.map((message) => ({
          role: message.role,
          content: message.content,
          conversation: conversation._id,
        })),
      ]).then(() => {
        console.log(INITIAL_MESSAGES);
        openai
          .createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: INITIAL_MESSAGES,
          })
          .then((data) => {
            new Message({
              role: 'assistant',
              content: data.data.choices[0].message.content,
              conversation: conversation._id,
            })
              .save()
              .then(() => {
                res.send({
                  message: data.data.choices[0].message.content,
                  conversation: conversation._id,
                });
              });
          });
      });
    });
  } else {
    Conversation.findById(req.params.id).then((conversation) => {
      Message.find({ conversation: conversation._id }).then((messages) => {
        const lastMessage = getLastMessage(messages);
        const newMessages = [
          {
            role: 'user',
            content: req.body.message.content,
            conversation: conversation._id,
          },
        ];
        if (lastMessage === 2) {
          newMessages.push({
            role: ChatCompletionRequestMessageRoleEnum.System,
            content: 'realiza una ultima pregunta',
            conversation: conversation._id,
          });
        }
        Message.insertMany(newMessages).then(() => {
          const chatInterview = [
            ...messages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
            req.body.message,
          ];
          if (lastMessage === 2) {
            chatInterview.push({
              role: ChatCompletionRequestMessageRoleEnum.System,
              content: 'realiza una ultima pregunta',
            });
          }
          console.log('LastMessageID: ', lastMessage);
          console.log('Chat: ', chatInterview);
          openai
            .createChatCompletion({
              model: 'gpt-3.5-turbo',
              messages: chatInterview,
            })
            .then((data) => {
              new Message({
                role: 'assistant',
                content: data.data.choices[0].message.content,
                conversation: conversation._id,
              })
                .save()
                .then(() => {
                  res.send({
                    message: data.data.choices[0].message.content,
                    conversation: conversation._id,
                  });
                });
            });
        });
      });
    });
  }
});

app.get('/conversation/:id', (req, res) => {
  Conversation.findById(req.params.id).then((conversation) => {
    Message.find({ conversation: conversation._id }).then((messages) => {
      res.send(messages);
    });
  });
});

app.listen(3000, () => {
  console.log('Server Started on port 3000');
});