import { signOut } from '../../utils/auth';
import getVocab from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';
// navigation events
const navigationEvents = () => {
// LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL VOCAB CARDS
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });
};

export default navigationEvents;
