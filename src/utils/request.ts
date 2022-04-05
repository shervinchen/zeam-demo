import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://www.freetogame.com'
      : 'http://localhost:3000',
});
