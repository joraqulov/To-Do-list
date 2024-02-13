let input = document.getElementById("input");
let to_list = document.getElementById("to_list");
function add() {
  if (input.value == "") {
    alert("please enter text");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerHTML = `${input.value} <i class="fa-solid fa-circle-xmark"></i>`;
    to_list.appendChild(newElement);
    to_list.style.display = "block";
    input.value = "";
    newElement.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElement.remove();
    }
    function clik() {
      if (newElement.style.textDecoration === "line-through") {
        newElement.style.textDecoration = "none";
        newElement.style.color = " black";
        newElement.style.backgroundColor = "white";
      } else {
        newElement.style.textDecoration = "line-through";
        newElement.style.backgroundColor = "slategray";
        
        newElement.style.color = "white";
      }
    }
    newElement.onclick = clik;
  }
}
