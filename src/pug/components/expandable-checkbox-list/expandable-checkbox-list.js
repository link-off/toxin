document.querySelectorAll('[data-expandable-checkbox-list]').forEach(el => {
  const data = el.dataset;
  let isOpen = 'expandableCheckboxListIsOpen' in data;

  el.onclick = function (e) {
    if (!isOpen) {
      el.classList.add('expandable-checkbox-list_open');
    } else {
      el.classList.remove('expandable-checkbox-list_open');
    }
    isOpen = !isOpen;
  }

})


// import $ from 'jquery';
// console.log()

// class ExpandableCheckboxList {
//     constructor(element) {
//         this.$root = $(element);
//         this.$name = this.$root.find('.js-expandable-checkbox-list__name');
//         this.$arrow = this.$root.find('.js-expandable-checkbox-list__arrow ');
//     }

//     init() {
//         this.addEvents();
//     }
//     addEvents() {
//         this.$header.on('click.headerListExpandable', this.handleListExpandableHeaderClick.bind(this));
//     }

//     handleListExpandableHeaderClick() {
//         this.$root.toggleClass('expandable-checkbox-list_type_collapsed');
//         this.$root.toggleClass('expandable-checkbox-list_type_expanded');

//         this.$arrow.toggleClass('expandable-checkbox-list__arrow_collapsed');
//         this.$arrow.toggleClass('expandable-checkbox-list__arrow_expanded');
//     }

//     destroy() {
//         this.$name.off('click.headerListExpandable');
//     }
// }

// export default ExpandableCheckboxList;