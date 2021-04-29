import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing-example', '.glazing-example__items', '.glazing-cold', 'active');
    tabs('.decoration-category', '.decoration-category__item', '.decoration-content', 'after_click');
});