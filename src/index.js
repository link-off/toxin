import $ from 'jquery';
import './js' 

import './pug/components/like/like';
import './pug/components/range-slider/range-slider';
import './pug/components/range/range';
import ExpandableCheckboxList from './pug/components/expandable-checkbox-list/expandable-checkbox-list';

import './assets/scss/main.scss';

$('.js-expandable-checkbox-list').each((_, domElement) => {
    const checkboxList = new ExpandableCheckboxList(domElement);
    checkboxList.init();
});

