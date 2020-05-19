const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('todo-add');
const todoList = document.getElementById('todolist');
const inputCount = document.getElementById('input-count');

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


function addItemToList() {
    if(!todoInput.value) return;

    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    // added this meta attributes
    listItemRemoveBtn.setAttribute('data-action', 'remove');
    listTextSpan.innerText = todoInput.value;
    listCheckboxStatus.type = 'checkbox';
    // added this meta attributes
    listCheckboxStatus.setAttribute('data-action', 'status')

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

    // Adding new item
    // 1. get todos from localStorage
    // 2. parse todos
    // 3. todos.push({ text: 'some   text', status: 'NOT' })
    // 4. json.stringify todos
    // 5. localStorage.setItem('todos', todos);
    
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

const products = [
    {
        name: 'Apple',
        price: 10
    },
    {
        name: 'Orages',
        price: 40
    },
    {
        name: 'Milk',
        price: 20
    },
]

localStorage.setItem('products', JSON.stringify(products));
console.log(JSON.parse(localStorage.getItem('products'))[0]);









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
