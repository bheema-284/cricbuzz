//const API_KEY = "f5b756e1-b13e-4073-8298-3f3b6ca5567d";
const API_KEY = '8fb2094c-bd8b-4406-b438-2cc52cff19ea';
export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0&4bb075f6-10d9-4d0b-937a-65fed76bd2a8`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log('ERROR', err));
};
