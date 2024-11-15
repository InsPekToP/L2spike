function showForm() {
    var form = document.getElementById("linkForm");
    var overlay = document.querySelector(".modal-overlay");

    form.classList.add("show");
    overlay.classList.add("show");
}

function hideForm() {
    var form = document.getElementById("linkForm");
    var overlay = document.querySelector(".modal-overlay");

    form.classList.remove("show");
    overlay.classList.remove("show");
}
