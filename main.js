let checkbox = document.getElementById("checkbox");
let to_list = document.getElementById("to_list");

function clik() {
  if (to_list.style.color === "red") {
    to_list.style.color = "blue";
    to_list.style.textDecoration = "none";
  } else {
    to_list.style.color = "red";
    to_list.style.textDecoration = "line-through";
  }
}

checkbox.onclick = clik;
