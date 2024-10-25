let addItemsAction = document.querySelector(".addItems-action");
let input = document.querySelector(".addItems-input");
let submit = document.querySelector(".addItems-submit");
let list = document.querySelector(".grocery-list");
let displayItemsAction = document.querySelector(".displayItems-action");
let clear = document.querySelector(".displayItems-clear");

submit.addEventListener("click", addItem);
document.addEventListener("DOMContentLoaded", displayStorage);
clear.addEventListener("click", removeItems);
list.addEventListener("click", removeSingleItem);

function addItem(event) {
  event.preventDefault();
  let value = input.value;
  if (value === "") {
    showAction(addItemsAction, "لطفا نام کالا را بنویسید", false);
  } else {
    showAction(addItemsAction, `${value} به سبد شما اضافه شد`, true);
    createItem(value);
    updateStorrage(value);
  }
}

function showAction(element, text, value) {
  if (value === true) {
    element.classList.add("success");
    element.innerText = text;
    input.value = "";
    setTimeout(() => {
      element.classList.remove("success");
    }, 2000);
  } else {
    element.classList.add("alert");
    element.innerText = text;
    input.value = "";
    setTimeout(() => {
      element.classList.remove("alert");
    }, 2000);
  }
}

function createItem(value) {
  let parent = document.createElement("div");
  parent.classList.add("grocery-item");
  // parent.insertAdjacentHTML
  parent.innerHTML = `<h4 class="grocery-item__title">${value}</h4>
    <a href="#" class="grocery-item__link">
        <i class="far fa-trash-alt"></i>
    </a>`;
  list.appendChild(parent);
}

// to update the LocalStorage
function updateStorrage(value) {
  let groceryList;
  groceryList = localStorage.getItem("groceryList")
    ? JSON.parse(localStorage.getItem("groceryList"))
    : [];
  groceryList.push(value);
  localStorage.setItem("groceryList", JSON.stringify(groceryList));
}

// display items to localStorage
function displayStorage() {
  let isItemExists = localStorage.getItem("groceryList");
  if (isItemExists) {
    let storageItems = JSON.parse(localStorage.getItem("groceryList"));
    storageItems.forEach((item) => {
      createItem(item);
    });
  }
}

// Remove All Items
function removeItems() {
  localStorage.removeItem("groceryList");
  let items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    showAction(displayItemsAction, "تمامی اقلام حذف گردید", false);
    items.forEach((item) => {
      list.removeChild(item);
    });
  } else {
    showAction(displayItemsAction, "کالای دیگری برای پاک کردن ندارید", false);
  }
}

// Remove Single Item
function removeSingleItem(event) {
  event.preventDefault();
  let link = event.target.parentElement
  if (link.classList.contains('grocery-item__link')){
    let text = link.previousElementSibling.innerHTML
    let groceryItem = event.target.parentElement.parentElement

    list.removeChild(groceryItem)
    showAction(displayItemsAction, `${text} از سبد شما حذف گردید`, true)

    editStorage(text)
  }
}

function editStorage(item){
  let groceryItems = JSON.parse(localStorage.getItem('groceryList'))
  let index = groceryItems.indexOf(item)
  groceryItems.splice(index, 1)
  localStorage.removeItem('groceryList')
  localStorage.setItem('groceryList', JSON.stringify(groceryItems))
}