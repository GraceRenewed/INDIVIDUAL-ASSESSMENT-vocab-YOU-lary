import client from '../utils/client';
// API CALLS FOR VOCAB CARDS

const endpoint = client.databaseURL;

// GET VOCAB CARDS
const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type':
      'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

console.warn(getVocab);

export default getVocab;
