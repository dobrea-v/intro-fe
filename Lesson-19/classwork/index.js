const helloBtn = document.getElementById('hello-button');
helloBtn.onclick = () => alert('Hello World!(from script file)');
helloBtn.onclick = () => alert('Another Handler');



function sayThanks(event) {
    console.log(event)
    if(event.altKey === true) {
        console.log('Alt was pressed');
    }
    alert('Thanks for clicking me!')
}

const btnWithListner = document.getElementById('button-with-listner');
btnWithListner.addEventListener('click', sayThanks);


function itemInfo(event) {
    alert(`Target: ${event.target.innerHTML}, CurrentTarget: ${event.currentTarget.id}`)
}

//const shoppingList = Array.from(document.getElementById('shopping-list').children);
const shoppingList = document.getElementById('shopping-list');
console.log(shoppingList);
shoppingList.addEventListener('click', itemInfo);

//We can attach event dynamicaly 

// for(let i = 0; i < shoppingList.length; i++) {
//     shoppingList[i].onclick = (item) => itemInfo(item)
// }

//Or we can addEventListner
// for(let i = 0; i < shoppingList.length; i++) {
//     shoppingList[i].addEventListener('click', itemInfo)
// }


// Now let's imagine if we add an item later

/// ......  backend send new item

const updatedShoppingList = document.getElementById('shopping-list')
const customLi = document.createElement('li')
customLi.innerHTML = 'PineApple';
updatedShoppingList.append(customLi);
