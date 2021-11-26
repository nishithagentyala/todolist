const todoinput = document.querySelector('.input')
const button = document.querySelector('.add')
const todolist = document.querySelector('.todolist')
const clear = document.querySelector('.clear');
const editInput = document.querySelector('.editInput')
const popupEdit = document.querySelector('.popupEdit')
const blur = document.querySelector('#blur')
const savebtn = document.querySelector('.save')

let todoarray = [];
let currenttodo;
const add = () => {
    if (todoinput.value == "")
        alert('add something')
    else {
        todoarray.push({ id: todoarray.length, text: todoinput.value })
        const newtodo = document.createElement('div')
        newtodo.classList.add('list')
        const additem = document.createElement('div')
        additem.innerHTML = todoarray[todoarray.length - 1].text;
        addLocalStorage(todoarray)
        additem.classList.add('item')
        newtodo.appendChild(additem)
        const editbtn = document.createElement('button')
        editbtn.innerHTML = '<i class="fas fa-edit"></i>'
        editbtn.classList.add('editbtn')
        newtodo.appendChild(editbtn)
        const deletebtn = document.createElement('button')
        deletebtn.innerHTML = '<i class="fas fa-trash"></i>'
        deletebtn.classList.add('deletebtn')
        newtodo.appendChild(deletebtn)
        todolist.appendChild(newtodo)
        todoinput.value = ""
    }
}
function addLocalStorage(todos) {
    const todo = JSON.stringify(todos)
    localStorage.setItem('todos', todo)
}
function deletecheck(e) {
    const item = e.target;
    if (item.classList[0] === 'deletebtn') {
        const todo1 = item.parentElement;
        todo1.remove();
    }

}
function editModal() {
    blur.classList.toggle('active')
    popupEdit.classList.toggle('active')
}
const edited = (event) => {
    const item = event.target;
    if (item.classList[0] === 'editbtn') {
        editModal();
        currenttodo = item.parentElement.childNodes[0];
        editInput.value = currenttodo.innerText;
    }
}
const clearAll = () => {
    todolist.innerHTML = "";
    //localStorage.clear('todos')
}
const changed = () => {
    currenttodo.innerHTML = editInput.value;
    currenttodo = undefined
    editInput.value = ""
    editModal();
}

button.addEventListener('click', add)
todolist.addEventListener('click', deletecheck)
todolist.addEventListener('click', edited)
clear.addEventListener('click', clearAll)
savebtn.addEventListener('click', changed)

