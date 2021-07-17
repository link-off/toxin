document.querySelectorAll('[data-filter-date-dropdown]').forEach(el => {
  const data = el.dataset;
  let isOpen = 'filterDateDropdownIsOpen' in data;

  el.onclick = function (e) {
    if (!isOpen) {
      el.classList.add('filter-date-dropdown_open');
    } else {
      el.classList.remove('filter-date-dropdown_open');
    }
    isOpen = !isOpen;
  }

})