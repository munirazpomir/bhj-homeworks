document.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    let activeTooltip = null;

    tooltipElements.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            if (activeTooltip && activeTooltip.element === el) {
                activeTooltip.tooltip.remove();
                activeTooltip = null;
                return;
            }

            if (activeTooltip) {
                activeTooltip.tooltip.remove();
            }

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip_active';
            tooltip.textContent = el.getAttribute('title');
            document.body.appendChild(tooltip);

            const rect = el.getBoundingClientRect();

            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + 5}px`;

            activeTooltip = { tooltip, element: el };
        });
    });

    document.addEventListener('click', function (e) {
        if (
            activeTooltip &&
            !e.target.classList.contains('has-tooltip')
        ) {
            activeTooltip.tooltip.remove();
            activeTooltip = null;
        }
    });
});