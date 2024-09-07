import getVocab from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING VOCAB
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));

        deleteBook(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
  });
};

export default domEvents;
