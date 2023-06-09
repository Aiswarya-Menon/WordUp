
# WordUp

WordUp is a website that can be used to improve one's English vocabulary . The site provides 5 english words and their meanings using Chatgpt api . It is basically built using HTML, CSS and Javascript.
### Meaning Finder

An additional feature called Meaning Finder is also provided that can be used to find the meaning of a particular word by user.




## API Reference

### ChatGPT API

The ChatGPT API allows you to integrate ChatGPT, a powerful language model, into your applications and services. With the API, you can generate dynamic and interactive conversations with the model.

### Base URL

https://api.openai.com/v1/chat/completions

### Authentication

The API requires authentication using an API key. You can obtain an API key from the OpenAI platform.

Include the API key in the Authorization header of your API requests as follows:

Authorization: Bearer YOUR_API_KEY

### Request
Send a POST request to the base URL to generate model completions for a conversation. The conversation should be an array of message objects, where each object has a role (either "system", "user", or "assistant") and content (the message content).

### Response
The API responds with a JSON object containing the assistant's reply and other information.

### Error Handling
In case of an error, the API responds with an appropriate error status code and a JSON object describing the error.




## Run Locally
To run this project on your local machine, follow these steps:

Clone the repository to your local machine using the following command:

```bash
  git clone https://github.com/Aiswarya-Menon/WordUp.git
```

Navigate to the project's directory:

```bash
  cd WordUp
```

Open the index.html file in your web browser to view the website:

Double-click on the index.html file and it will open in your default web browser.

