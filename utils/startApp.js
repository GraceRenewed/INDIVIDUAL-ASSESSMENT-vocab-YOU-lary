import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../components/events/domEvents';
// import formEvents from '../events/formEvents';
import navigationEvents from '../components/events/navigationEvents';
import getVocab from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const startApp = () => {
  loginButton();
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all cards on the DOM on App load
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
