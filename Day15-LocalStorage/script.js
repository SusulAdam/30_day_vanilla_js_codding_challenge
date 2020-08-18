const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// if it is localstarage get it, if not get empty erray
const items = JSON.parse(localStorage.getItem('items')) || [];



function addItem(e) {
    e.preventDefault()

    const text = (this.querySelector('[name=item]')).value // we can also use sth class to querySelector this item
    const item = {
        // we can also use: text
        text: text,
        done: false
    }
    // reset form element
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}


function populateList(plates = [], platesList) {
    // map return array- we need string so it is join
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for= "item${i}" > ${plate.text}</label >
            </li >
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList)
}

const checkBoxes = document.querySelectorAll('input');


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);



populateList(items, itemsList)