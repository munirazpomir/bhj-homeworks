document.addEventListener("DOMContentLoaded", () => {
    const rotators = document.querySelectorAll(".rotator");

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll(".rotator__case");
        let index = 0;

        function nextCase() {
        const current = cases[index];
        current.classList.remove("rotator__case_active");

        index = (index + 1) % cases.length;
        const next = cases[index];

        next.style.color = next.dataset.color;
        next.classList.add("rotator__case_active");

        const delay = parseInt(next.dataset.speed, 10);

        setTimeout(nextCase, delay);
        }

        const initial = cases[index];
        initial.style.color =initial.dataset.color;

        setTimeout(nextCase, parseInt(initial.dataset.speed, 10));
    });
});