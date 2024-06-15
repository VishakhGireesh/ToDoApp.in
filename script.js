let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

function addlist() {
    let inputValue = input.value;
    let li = document.createElement("li");
    ul.appendChild(li);
    let spanEl=document.createElement("span");
    li.appendChild(spanEl);
    spanEl.textContent = inputValue;
    input.value = "";
    input.focus();
    let trash = document.createElement("i");
    trash.classList.add("fas","fa-trash");
    li.appendChild(trash);
    let edit = document.createElement("i");
    edit.classList.add("fas","fa-edit");
    li.appendChild(edit);
}
function deleteItem(event) {
    if (event.target.classList[1] === "fa-trash") {
        let item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("transitionend", function () {
            item.remove();
        });
    
}
}


function editItem(event){
if(event.target.classList[1]==="fa-edit"){
let editedValue= prompt("please add new text ");
let item = event.target.parentElement;

let spanEl= item.querySelector("span");
spanEl.innerText=  editedValue;

}
}
btn.addEventListener("click", addlist);
ul.addEventListener("click", deleteItem);
ul.addEventListener("click",editItem);