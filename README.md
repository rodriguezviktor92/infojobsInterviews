<p align="center">
    <img src="https://i.ibb.co/c8wwdMC/infojobs-Hackathon-min.png" width="100%" alt="Banner" />
</p>

# README - Entrevista Virtual para InfoJobs

¡Bienvenido al proyecto de la extensión de Google Chrome "
Infojobs Interviews"!

Esta extensión te permitirá simular una entrevista de trabajo basada en la descripción de la oferta de trabajo en la plataforma InfoJobs. Agregará un botón a la página web de InfoJobs, y al hacer clic en él, podrás experimentar una entrevista virtual generada automáticamente.

## ✅ Funcionalidades

La extensión "Infojobs Interviews" ofrece las siguientes funcionalidades:

- Agrega un botón a la página web de InfoJobs para iniciar la entrevista virtual.
- Consulta la descripción de la oferta de trabajo utilizando la API de InfoJobs.
- Genera preguntas relevantes para la entrevista basadas en la descripción de la oferta.
- Utiliza la API de AWS Polly para generar el audio del asistente virtual durante la entrevista.
- Crea un personaje animado utilizando la API de MediaSemantics para acompañar la entrevista.
- Sincroniza los labios del personaje animado con el audio generado por AWS Polly.
- Utiliza el API de ChatGPT para generar preguntas y respuestas personalizadas durante la entrevista.
- Brinda una experiencia interactiva y realista mediante animaciones y sincronización de audio y labios.
- Permite al usuario interactuar con el asistente virtual y responder a las preguntas de la entrevista.
- Finaliza la entrevista una vez que se han realizado todas las preguntas o el usuario decide finalizarla.

¡Disfruta de una experiencia única y práctica con la extensión "Infojobs Interviews" mientras te preparas para tus futuras entrevistas de trabajo!

## ✅ Tecnologías utilizadas

El proyecto hace uso de las siguientes tecnologías:

- **Web Components:** Utilizamos Web Components para crear y gestionar los elementos de la interfaz de usuario de la extensión.

- **API de InfoJobs:** Hemos utilizado la API de InfoJobs para consultar la descripción de la oferta de trabajo correspondiente y generar preguntas relevantes para la entrevista virtual.

- **API de AWS Polly:** Utilizamos la API de AWS Polly para generar el audio del asistente virtual que llevará a cabo la entrevista. Esto nos permite brindar una experiencia más inmersiva al usuario.

- **API de MediaSemantics:** Hemos utilizado la API de MediaSemantics para generar un personaje animado que acompañe la entrevista. Esta API nos proporciona la capacidad de sincronizar los labios del personaje con el audio generado por AWS Polly.

- **Animaciones y sincronización de audio y labios:** Hemos implementado animaciones y sincronización de audio y labios utilizando las tecnologías mencionadas anteriormente para crear una experiencia interactiva y realista durante la entrevista virtual.

- **API de ChatGPT:** Hemos utilizado el API de ChatGPT para generar la entrevista en sí, basándonos en la descripción de la oferta de trabajo. Esto nos permite generar preguntas y respuestas relevantes y personalizadas para cada entrevista.

- **APIs desplegadas en Vercel y Railway:** Hemos construido dos APIs para el proyecto. La primera API, utilizada para el consumo de ChatGPT, está desplegada en Vercel. La segunda API, utilizada para el consumo de MediaSemantics y generar el personaje, está desplegada en Railway.

## Instrucciones de instalación

Sigue los pasos a continuación para instalar la extensión:

1. Clona este repositorio en tu máquina local.
```
git clone https://github.com/rodriguezviktor92/infojobsInterviews.git
```

1. Instala los paquetes con npm install.

```
# npm:
npm install
```

2. Abre Google Chrome y ve a la página de [Extensiones](chrome://extensions/).

3. Activa el modo de desarrollador en la esquina superior derecha de la página.

4. Haz clic en "Cargar desempaquetada" y selecciona la carpeta del repositorio clonado.

5. La extensión "infojobsInterviews" estará ahora instalada en tu navegador.

## Uso de la extensión

Una vez instalada la extensión, sigue estos pasos para usarla:

1. Abre la página web de InfoJobs he ingresa a cualquier oferta.

2. Verás un nuevo botón agregado a la interfaz de InfoJobs que dice "SIMULAR ENTREVISTA". Haz clic en ese botón para iniciar la entrevista virtual.

3. La entrevista se llevará a cabo con la ayuda de un asistente virtual animado y generará preguntas basadas en la descripción de la oferta de trabajo.

4. Interactúa con el asistente virtual y responde a sus preguntas de la manera más precisa y adecuada posible. Puedes escuchar las preguntas y las instrucciones del asistente a través del audio generado por AWS Polly.

5. Durante la entrevista, el personaje animado proporcionado por MediaSemantics sincronizará sus labios con el audio, brindando una experiencia más realista.

6. Responde a las preguntas de la entrevista de la mejor manera que puedas. El asistente virtual utilizará el API de ChatGPT para generar respuestas relevantes basadas en tus respuestas anteriores y la descripción de la oferta de trabajo.

7. La entrevista continuará hasta que se hayan realizado las 5 preguntas mas comunes para esta oferta o decidas finalizarla.

¡Disfruta de tu experiencia de entrevista virtual y obtén una idea de cómo podrías responder en una entrevista de trabajo basada en la descripción de la oferta de trabajo en InfoJobs!

¡Gracias por utilizar la extensión "infojobsInterviews"! Esperamos que te sea útil y que tengas una gran experiencia con ella. Si tienes alguna sugerencia o mejora, no dudes en hacérnosla saber. ¡Buena suerte en tu búsqueda de empleo!