let checkbox = document.getElementById("checkbox");
let to_list = document.querySelectorAll("#to_list");

function clik() {
  to_list.forEach((item) => {
    if (item.style.textDecoration === "line-through") {
      item.style.textDecoration = "none";
    } else {
      item.style.textDecoration = "line-through";
    }
  });
}

checkbox.onclick = clik;
