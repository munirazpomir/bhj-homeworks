document.addEventListener("DOMContentLoaded", () => {
    const fontSize = document.querySelectorAll(".font-size");
    const book = document.getElementById("book");

    fontSize.forEach(control => {
        control.addEventListener("click", (event) => {
            event.preventDefault();

            fontSize.forEach(el => el.classList.remove("font-size_active"));

            control.classList.add("font-size_active");

            book.classList.remove("book_fs-small", "book_fs-big");

            const size = control.dataset.size;
            if (size === "small") {
                book.classList.add("book_fs-small");
            } else if (size === "big") {
                book.classList.add("book_fs-big");
        }
        });
    });
});