// this is the server side code in javascript
// we include all the dependencies and requirements i.e,
// socket --> for web socket setting
// express --> for server routing 
// http --> for the http requests 
// and we also set up a port to run the app
const { Socket } = require('dgram')
const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http').createServer(app)
const port = process.env.port || 3000


//here the port is setup to run the app
http.listen(port , () => {
    console.log(`Listening at port ${port}`)
})

// all the frontend and client side backend are rendered here
app.use(express.static(__dirname + '/public'))
app.use(cors())


// frontend rendered here on response of home page 
app.get('/' , (req , res) => {
    res.sendFile(__dirname + '/index.html')
})

// socket setup --> we basically declare a socket variable and get the http
// request and on connection being set , a callback func will have the socket
// emit the msgs being sent .
const io = require('socket.io')(http)
io.on('connection' , (socket) => {
    console.log('Connected !!')
    socket.on('chat' , (msg) => {
        socket.broadcast.emit('chat' , msg)
    })
})





