import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
// import navBar from '../components/shared/navBar';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
// import navigationEvents from '../events/navigationEvents';
// import { getCards } from '../api/cardData';
// import { showCards } from '../pages/vocab';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  // navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all cards on the DOM on App load
  getCards().then((books) => showCards(books));
};

export default startApp;
