const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('todo-add');
const todoList = document.getElementById('todolist');

addButton.addEventListener('click', addItemToList);
todoList.addEventListener('click', handleItemClick);


function handleItemClick(event) {
    console.log(event.target.dataset) 
    console.log(event.target.closest('li'));
}

function addItemToList() {
    if(!todoInput.value) return;

    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    listItemRemoveBtn.setAttribute('data', 'remove')
    listTextSpan.innerText = todoInput.value;
    listCheckboxStatus.type = 'checkbox';

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

    todoInput.value = '';
    todoList.append(listItem);
}