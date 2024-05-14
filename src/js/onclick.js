import { headerMenu } from './refs';

// Burger has clicked
export function onBurgerIconClick(event) {
  event.currentTarget.classList.toggle('is-active');

  if (event.currentTarget.classList.contains('is-active')) {
    document.body.classList.add('is-locked');
    headerMenu.classList.add('is-open');
  } else {
    document.body.classList.remove('is-locked');
    headerMenu.classList.remove('is-open');
  }
}

// function Active Class Toogle
export function onClickToggleClass(event) {
  event.currentTarget.classList.toggle('is-active');
}
