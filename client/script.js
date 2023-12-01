var socket = io("http://localhost:5000");

const list = document.getElementById("list")

document.getElementById("demo").onclick = (e) => {
    e.preventDefault()
    newItem.style.display = "block"
    const textIp = document.getElementById("prompt")
    newItem.innerHTML = textIp.value
    console.log('varo')
    socket.emit("request",textIp.value)
    textIp.value = ""
    newItem = document.createElement("li")
    newItem.setAttribute('class', 'bg-white px-5 py-2 mt-2')
    list.appendChild(newItem)
    newItem.style.display = "none"
}

let newItem = document.createElement("li")
newItem.setAttribute('class', 'bg-white px-5 py-2 mt-2')
list.appendChild(newItem)
newItem.style.display = "none"

let aflg = true ;
let answer = document.createElement("li");
answer.setAttribute('class', 'bg-white px-5 py-2 mt-2 text-right')
list.appendChild(answer)
answer.style.display = "none"

socket.on("response",(msg)=>{
    console.log(msg)
    if(aflg) {
        answer.style.display = "block"
        aflg = false
    }
    if ( msg === "") {
        answer = document.createElement("li")
        answer.setAttribute('class', 'bg-white px-5 py-2 mt-2 text-right')
        list.appendChild(answer)
        answer.style.display = "none"
        aflg = true
    }else {
        answer.innerHTML = answer.innerHTML + msg
    }
})

document.getElementById("close").onclick = () => {
    document.getElementById("ai").style.display = "none"
}

document.getElementById("show").onclick = () => {
    document.getElementById("ai").style.display = "block"
}
