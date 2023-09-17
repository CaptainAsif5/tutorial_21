const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');
var input = document.querySelector('.input');

class item {
  constructor(itemName) {
    this.asd(itemName);
  }

  asd(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input')
    input.type = "text";
    let itemBox = document.createElement('div');
    itemBox.classList.add('item')
    container.appendChild(itemBox);
    itemBox.appendChild(input);
  }

  edit(input) {
    input.disabled = !input.disabled;
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
  if (e.which == 13) {
    check();
  }
});