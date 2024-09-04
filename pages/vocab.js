import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString +=`
      <div class="card">
        img </div>`
  })
}
export {};
