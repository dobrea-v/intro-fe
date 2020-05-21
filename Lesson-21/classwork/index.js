const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('todo-add');
const todoList = document.getElementById('todolist');
const inputCount = document.getElementById('input-count');

let tempStorage = getTodosFromLocalStorage();
tempStorage === null ? tempStorage = [] : tempStorage;
setTodosToLocalStorage(tempStorage);

addButton.addEventListener('click', addItemToList);
todoList.addEventListener('click', handleItemClick);
todoInput.addEventListener('keydown', handleInputCount);

function handleInputCount(event) {
    const count = event.target.value.length;

    if(count === 0) {
        inputCount.innerText = '';
        return;
    }

    inputCount.innerText = 'Characters count: ' + count;
}

function handleItemClick(event) {
    if(event.target.dataset.action === 'remove') {
        event.target.closest('li').remove();
    }
    if(event.target.dataset.action === 'status') {
        event.target.closest('li').classList.toggle('complete');
    }
}

for (let i = 0; i < tempStorage.length; i++) {
    addItemToList(tempStorage[i].text, tempStorage[i].status)
}

function addItemToList(text, status = false) {
    if(!todoInput.value && !text) return;

    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    listItemRemoveBtn.setAttribute('data-action', 'remove');
    if (todoInput.value) {
        listTextSpan.innerText = todoInput.value;
    } else {
        listTextSpan.innerText = text;
    }
    listCheckboxStatus.type = 'checkbox';
    listCheckboxStatus.checked = status;
    listCheckboxStatus.setAttribute('data-action', 'status')

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

    let tempStorage = getTodosFromLocalStorage();
    tempStorage.push({
        id: tempStorage.length,
        text: todoInput.value,
        status: false,
    })
    setTodosToLocalStorage(tempStorage);
    
    todoInput.value = '';
    inputCount.innerText = '';
    todoList.append(listItem);
}

// When you reload page, you should do the following logic:
// 1. read from localStorage.getItem('todos')
// 2. parse (JSON.parse(todos)).
// 3. Iterate through parsed array and call you function that will generate todoItem,
// think if you can re-use our addItemToList()
// for (let i = 0; i < todos.lenght; i++) {
//   addTodoItem(text, status)   
// }

// Remove of item from list and localStorage
// To remove item you first need to get localStorage object
// Then you need to find(you will need to iterate through array) item in array and remove it.

// const products = [
//     {
//         name: 'Apple',
//         price: 10
//     },
//     {
//         name: 'Orages',
//         price: 40
//     },
//     {
//         name: 'Milk',
//         price: 20
//     },
// ]

// localStorage.setItem('products', JSON.stringify(products));
// console.log(JSON.parse(localStorage.getItem('products'))[0]);









// const todos = [{
//     text: 'Hello',
//     status: 'DONE'
// },
// {
//     text: 'Buy Milk',
//     status: 'DONE'
// }]
// localStorage.setItem('todos', JSON.stringify(todos))
// console.log(JSON.parse(localStorage.getItem('todos')))

// todoInput.addEventListener('keyup', handleInputChange);
// todoInput.addEventListener('change', handleInputChange);
// todoInput.addEventListener('blur', handleInputChange);

// function handleInputChange(event) {
//     const value = event.target.value;
    
//     if (value.length === 0) {
//         inputCount.innerText = '';
//         return;
//     }
//     inputCount.innerText = 'Characters count:' + value.length;
// }

// function handleItemClick(event) {
//     if (event.target.dataset.action === "remove") {
//         event.target.closest('li').remove()
//     }
//     if (event.target.dataset.action === "status") {
//         event.target.closest('li').classList.toggle('complete');
//     }
// }

// Helper functions 

function getTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos'))
}
function setTodosToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

