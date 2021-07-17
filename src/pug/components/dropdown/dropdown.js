document.querySelectorAll('[data-dropdown]').forEach(el => {
  const data = el.dataset;
  let isOpen = 'dropdawnIsOpen' in data;

  el.onclick = function (e) {
    if (!isOpen){
      el.classList.add('dropdown_open');
    } else {
      el.classList.remove('dropdown_open');
    }
    isOpen = !isOpen;
  }

})