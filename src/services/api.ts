import axios from 'axios';

const { BASE_URL } = process.env;

const api = axios.create({
  baseURL: `http://${BASE_URL}:3333`,
})

console.info(api);

export { api };