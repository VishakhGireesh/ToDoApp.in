let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

function addlist() {
    let inputValue = input.value;
    let li = document.createElement("li");
    li.textContent = inputValue;
    ul.appendChild(li);
    input.value = "";
    input.focus();
    let trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash");
    li.appendChild(trash);
}
function deleteItem(event) {
    if (event.target.classList[0] === "fas") {
        let item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("transitionend", function () {
            item.remove();
        });
    }
}

btn.addEventListener("click", addlist);
ul.addEventListener("click", deleteItem);
