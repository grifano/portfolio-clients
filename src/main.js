import 'modern-normalize';
import { burger } from './js/refs';
import { onClickToggleClass, onBurgerIconClick } from './js/onclick';

// When burger clicked open menu, change icon, and prevent page from scrolling
burger.addEventListener('click', onBurgerIconClick);
