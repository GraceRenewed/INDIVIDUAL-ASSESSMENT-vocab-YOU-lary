// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Your Vocabulary!</h1>vcd
    <h2>These are font awesome icons:</h2>
    <i class="fas fa-user fa-4x">
    </i>
    <i class="fab fa-github-square fa-5x"></i>`;

  console.warn('YOU ARE UP AND RUNNING!');

  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
