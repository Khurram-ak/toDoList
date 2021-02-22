
var date;
var target = document.getElementById("ul")
var items = [];
date();

function todoList() {

    var userInput = document.getElementById("input")

    items.push({
        item: userInput.value,
        time: date,
        completed: false
    })
    update();
    userInput.value = "";
}

function update() {
    target.innerHTML = ""

    items.map(function (_toDo, index) {
        var div = document.createElement("div")
        div.classList.add("divClass")
        target.appendChild(div)

        var nodeLi = document.createElement("li")
        var textNodeLi = document.createTextNode(_toDo.item)
        nodeLi.classList.add("list", _toDo.completed ? "completed" : null)
        nodeLi.appendChild(textNodeLi)
        div.appendChild(nodeLi)


        var nodeP = document.createElement("p")
        var textNodeP = document.createTextNode(items[index].time)
        nodeP.appendChild(textNodeP)
        div.appendChild(nodeP)

        var nodeBtn = document.createElement("button")
        // var textNodeBtn = document.createTextNode("Edit")
        nodeBtn.classList.add("btn")
        nodeBtn.innerHTML = '<i class="fas fa-edit"></i>'
        nodeBtn.onclick = () => edit(index)
        // nodeBtn.setAttribute("onclick","edit()")
        div.appendChild(nodeBtn)

        var nodeBtn2 = document.createElement("button")
        nodeBtn2.innerHTML = '<i class="fas fa-check-circle"></i>'
        nodeBtn2.classList.add("btn")
        nodeBtn2.onclick = () => checked(index)
        div.appendChild(nodeBtn2)

        var nodeBtn3 = document.createElement("button")
        nodeBtn3.innerHTML = '<i class="fas fa-trash-alt"></i>'
        nodeBtn3.classList.add("btn")
        nodeBtn3.onclick = () => deleted(index)
        div.appendChild(nodeBtn3)
    })

}
function checked(index) {
    items.splice(index, 1, ({
        item: items[index].item,
        time: date,
        completed: true
    }))
    update()


}
function date() {
    var today = new Date();
    date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
    update();
}

function deleted(index) {
    items.splice(index, 1)
    update();
}

function edit(index) {
    var updated = prompt("Enter Value To Get Update:")
    items[index].item = updated;
    if(items[index].completed=true){
    items[index].completed = !items[index].completed
}
    update();
}


























// function todoList(){
//     var items=[]
//     var userInput=document.getElementById("input").value
//     items.push({
//         value:userInput,
//         createdAt:Date.now()
//     })

//     var node=document.createElement("li")
//     var textNode=document.createTextNode(items.value)
//     node.appendChild(textNode)

//     // var node=document.createElement("p")
//     // var textNode=document.createTextNode(userInput.value)
//     // node.appendChild(textNode)


//     document.getElementById("ul").appendChild(node)


// }