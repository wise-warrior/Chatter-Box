const socket = io()
let Name;
let textarea = document.querySelector('#text')
let msgarea = document.querySelector('.msg-area')

do{
    Name = prompt('Hi Chatter 😎 , Please Enter Your Name : ')
} while (!Name)

textarea.addEventListener('keyup' , (e) => {
    if (e.key == 'Enter'){
        sendMsg(e.target.value)
    }
})

function sendMsg (message){
    let msg = {
        user: Name,
        message: message.trim()
    }

    // append msg to msg area
    appendMsg(msg, 'outgoing')
    textarea.value = ''
    scrolltobottom()

    // Send Msg to server via web sockets 
    socket.emit('chat' , msg)

}

function appendMsg (msg , type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className , 'message')

    let markup = `
        <h4> ${msg.user} </h4>
        <p> ${msg.message} </p>
    `
    mainDiv.innerHTML = markup
    msgarea.appendChild(mainDiv)
}

// recieve msg from server
socket.on('chat' , (msg) => {
    appendMsg(msg , 'incoming')
    scrolltobottom()
})

function scrolltobottom (){
    msgarea.scrollTop = msgarea.scrollHeight
}