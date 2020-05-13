// Lesson 18.4

const shopList = document.getElementById('shop-list');
const shopListArr = Array.from(shopList.children);

function removeItemFromList(list, item) {
    for (let i = 0; i < list.length; i++) {
        if(list[i].innerText.toLowerCase() === item.toLowerCase()) {
            list[i].remove()
        }
    }
}

removeItemFromList(shopListArr, 'bread')
removeItemFromList(shopListArr, 'banana')
removeItemFromList(shopListArr, 'pasta')


// Lesson 18.6

const stockItems = [
    {
        name: 'Carrot',
        price: 12
    },
    {
        name: 'Apples',
        price: 5
    },
    {
        name: 'Oranges',
        price: 6
    },
    {
        name: 'Bananas',
        price: 8
    }
    
]

const selectedItem = prompt('Please enter desired item');
const selectedItemQuantity = parseInt(prompt('How much do you want?'));


function findItemInList(list, item) {
    let foundItem;
    for (let i = 0; i < list.length; i++) {
        if(list[i].name.toLowerCase() === item.toLowerCase()) {
            foundItem = list[i];
            break;
        }
    }
    if (!foundItem) {
        return `Sorry your item was now found!`
    }
    return foundItem;
}
console.log(findItemInList(stockItems, selectedItem))
//console.log('Your total price: ' + findItemInList(stockItems, selectedItem).price * selectedItemQuantity);
