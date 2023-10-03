console.log("Frontend JS ishga tushdi :)");

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
})