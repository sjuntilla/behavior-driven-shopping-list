let shoppingList = new List();
let form = document.getElementById('addItemForm');
let content = document.getElementById('content');


form.onsubmit = function (event) {
    event.preventDefault();
    addToShoppingList(event);
}

function addToShoppingList(item) {
    let name = item.target[0].value;
    let description = item.target[1].value;
    let newShoppingListItem = new Item(name, description);
    shoppingList.addItem(newShoppingListItem);
    renderList();
}

function renderList() {
    let rendered = shoppingList.render();
    content.innerHTML = rendered;

}