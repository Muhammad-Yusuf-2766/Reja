

console.log("Frontend JS ishga tushdi :)"); // Tanishtiruv uchun.

function itemTemplate(item) {
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">
        ${item.reja}
    </span>
    <div>
        <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
        >
        Edit
        </button>
        <button data-id="${item._id}" id="clean-all" class="btn btn-danger btn-sm">
        delete
    </button>
    </div>
    </li>`;
}

let createFielad = document.getElementById("create-field");


document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if(!createFielad.value.trim()) {
      console.log("Input bo'sh bo'lishi mumkin emas");
      return;
    }

    axios
      .post("/create-item", { reja: createFielad.value })
      .then((response) => {
        document
          .getElementById("list-item")
          .insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createFielad.value = "";
        createFielad.focus();
      })
      .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling !")
      })     
});

document.addEventListener("click", function (e) {
  console.log(e);
  if(e.target.classList.contains("delete-me")){
    if(confirm("Aniq o'chirmoqchimisiz ?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log(err, "O'chirishda xatolik bor")
        });
    }
  }
  
  if(e.target.classList.contains("edit-me")){
    let userInput = prompt("Editing value", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    if(userInput) {
      axios.post("/edit-item",{
         id: e.target.getAttribute("data-id"),
          new_input: userInput,
    }).then(response => {
        console.log(response.data);
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
    }).catch(err => {
        console.log("Xatolik bor: Iltimos qayta urinish");
    })
    }
  };
});

document.getElementById("clean-all").addEventListener("click", function() {
  axios.post("/delete-all", { delete_all: true }).then((respose) => {
    alert(respose.data.state);
    document.location.reload();
  })
})
