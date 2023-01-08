
# Chatter-Box 😎

Its a Real time Chat Application , wherein multiple users can 
chat with one another. Before chatting you need to enter your
name and all your messages will reflect the same. Also supports 
Emojis 🤩😎😁🔥💯😍 in chats. The Awesome UI is shown below 🤩👇👇


<p><img src="https://user-images.githubusercontent.com/83507719/211205346-51f7ab58-3e2a-4c47-8423-da274e871488.png" /></p>

## Software Summary :

| Purpose of Use          |   Software                                                           |
| ----------------- | ------------------------------------------------------------------ |
| Backend | Node.js , Express|
| Socket Connections Setup | Socket.io |
| Frontend| HTML , CSS |
| Routing MiddleWare | Express , Cors (for cross origin requests) |


## Working 💻👨‍💻

- Basically web sockets are created at the server and client side to simulate a socket communication using Socket.io
- These sockets do setup the server which listens to clients who tries to connect so as to chat.
- When clients are connected , their names are requested by the sockets which use the same so as to fetch their messages and display the same tagged with their names on the chat interface.
- The routing of chat messages and the maintenance of the Client-Server Connections are performed by Express as the Routing Middleware and Cors (facilitating the making of Cross-Origin Requests) !!


## Features ✅😎

- Supports MULTI-USER chatting in REAL TIME.
- All the users can chat simultaneously 🤩💯
- To start the chatting , users are asked to enter their names which will be tagged to their messages and displayed in the chat -> a primitive kind of authentication stuff !!

## So Yeah , Enjoy being a Chatter 😎 !!!
