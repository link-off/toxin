document.querySelectorAll('[data-date-dropdown]').forEach(el => {
    const data = el.dataset;
    let isOpen = 'dateDropdawnIsOpen' in data;

    el.onclick = function (e) {
        if (!isOpen) {
            el.classList.add('date-dropdown_open');
        } else {
            el.classList.remove('date-dropdown_open');
        }
        isOpen = !isOpen;
    }

})