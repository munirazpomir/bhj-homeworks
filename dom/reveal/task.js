window.addEventListener("scroll", () => {
    const messages = document.querySelectorAll(".reveal");
    const vpHeight = window.innerHeight;

    messages.forEach(message => {
        const top = message.getBoundingClientRect().top;
        const bottom = message.getBoundingClientRect().bottom;

        const isVisible = top < vpHeight && bottom > 0;

        if (isVisible) {
            message.classList.add("reveal_active");
        } else {
            message.classList.remove("reveal_active");
        }
    });
});