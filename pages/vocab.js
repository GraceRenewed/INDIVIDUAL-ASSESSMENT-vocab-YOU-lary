import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};

// const time = new Date().getTime();
// console.warn(time);

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
     <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${item.techLanguage}</h6>
    <h7 class="time-stamp">${item.time}</h7>
    <p class="card-text">${item.definition}</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link text-bg-danger mb-3">Delete</a>
  </div>
</div>`;
  });
  renderToDOM('#store', domString);
};
export { showVocab, emptyVocab };
