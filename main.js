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
      } else {
        newElement.style.textDecoration = "line-through";
      }
    }
    newElement.onclick = clik;
  }
}
