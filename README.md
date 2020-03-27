# WEBHOOK TESTING TOOL

  A tool that allows you to list upcoming events to a POST endpoint and list the response

## Prerequisites
* Node v10 or higher
## How it works

For Windows users, you can just execute this file:
```sh
run.bat
```
OR
```sh
npm install
```

```sh
npm start
```
Linux:
```sh
./ngrok http 3000
```
Windows cmd:

```sh
ngrok.exe http 3000
```
## API
You can set your Webhook endpoint on the 3rd party app to your provided ngrok link:

```js
POST https://xxxxxx.ngrok.io/events/
```

You can list the response files using your browser by accessing:
```js
https://xxxxxx.ngrok.io/json/
```

OR

```js
https://localhost:3000/json/
```