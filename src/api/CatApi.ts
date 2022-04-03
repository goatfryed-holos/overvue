import axios from 'axios';

const CATAAS_BASE_URL = 'https://cataas.com';
const cataas = axios.create({
  baseURL: CATAAS_BASE_URL,
});
const catFacts = axios.create({
  baseURL: 'https://cat-fact.herokuapp.com',
});

async function getRandomCat() {
  const catRequest = cataas.get('/cat', { params: { json: true } });
  const factRequest = catFacts.get(
    '/facts/random',
  );
  const cat = (await catRequest).data;
  const fact = (await factRequest).data;

  return {
    ...cat,
    url: CATAAS_BASE_URL + cat.url,
    fact,
  };
}

export default {
  getRandomCat,
};
