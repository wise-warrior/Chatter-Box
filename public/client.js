// this is the client side code in javascript
// here again we include all the requisites i.e.,
// socket variable , we fetch the textarea and msg area to manipulate the 
// msgs
const socket = io()
let Name;
let textarea = document.querySelector('#text')
let msgarea = document.querySelector('.msg-area')


// this code continues prompting the user to enter his name 
// until he has not done so 
do{
    Name = prompt('Hi Chatter 😎 , Please Enter Your Name : ')
} while (!Name)


// this enables sending of msg (which is contained as value of a object event)
// on pressing enter
textarea.addEventListener('keyup' , (e) => {
    if (e.key == 'Enter'){
        sendMsg(e.target.value)
    }
})

// this func sends a msg --> we get the user name and msg typed by him in a object
// and it appends the msg on the user side as well as broadcasts it to the other 
// user side 
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


// this func appends the msg --> it basically creates a div dynamically 
// and appends the msg to it ( div created using inner html ).
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

// this msg enables scroll bar to show up if the msg is big enough
function scrolltobottom (){
    msgarea.scrollTop = msgarea.scrollHeight
}