const { Socket } = require('dgram')
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.port || 3000

http.listen(port , () => {
    console.log(`Listening at port ${port}`)
})

app.use(express.static(__dirname + '/public'))


app.get('/' , (req , res) => {
    res.sendFile(__dirname + '/index.html')
})

// socket setup
const io = require('socket.io')(http)
io.on('connection' , (socket) => {
    console.log('Connected !!')
    socket.on('chat' , (msg) => {
        socket.broadcast.emit('chat' , msg)
    })
})





