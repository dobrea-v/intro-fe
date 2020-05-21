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
    let tempStorage = JSON.parse(localStorage.getItem('todos'));
    const itemId = parseInt(event.target.closest('li').dataset.todoid);
    let newStorageArray = [];
    if(event.target.dataset.action === 'remove') {
        for (let i = 0; i < tempStorage.length; i++) {
            if(tempStorage[i].id !== itemId) {
                newStorageArray.push(tempStorage[i])
            }
        }
        event.target.closest('li').remove();
        localStorage.setItem('todos', JSON.stringify(newStorageArray));
    }
    if(event.target.dataset.action === 'status') {
        event.target.closest('li').classList.toggle('complete');
        for (let i = 0; i < tempStorage.length; i++) {
            if(tempStorage[i].id === itemId) {
                tempStorage[i].status = !tempStorage[i].status;
            }
            newStorageArray.push(tempStorage[i])
        }
        localStorage.setItem('todos', JSON.stringify(newStorageArray));
    }
}

let tempStorage = JSON.parse(localStorage.getItem('todos'));

if(tempStorage && tempStorage.length > 0) {
    for(let i = 0; i < tempStorage.length; i++) {
        const text = tempStorage[i].text;
        const status = tempStorage[i].status;
        const id = parseInt(tempStorage[i].id);
        console.log(text, status, id);
        addItemToList(text, status, id)
    }
}

function addItemToList(text, status, id) {
    if(!todoInput.value && !text) return;

    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    listItemRemoveBtn.setAttribute('data-action', 'remove');
    if(!todoInput.value && text) {
        listTextSpan.innerText = text;
    } else {
        listTextSpan.innerText = todoInput.value;
    }
    listCheckboxStatus.type = 'checkbox';
    listCheckboxStatus.checked = !!status;
    if(!!status) {
        listItem.classList.add('complete');
    }
    listCheckboxStatus.setAttribute('data-action', 'status')

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

    let tempStorage = JSON.parse(localStorage.getItem('todos'));
    tempStorage === null ? tempStorage = [] : tempStorage;    
    let itemId = id;

    if(todoInput.value) {
        tempStorage.push({
            id: tempStorage.length,
            text: listTextSpan.innerText,
            status: false
        })
        localStorage.setItem('todos', JSON.stringify(tempStorage));
        itemId = tempStorage.length
    }


    listItem.setAttribute('data-todoid', itemId);
    todoInput.value = '';
    inputCount.innerText = '';
    todoList.append(listItem);
}
