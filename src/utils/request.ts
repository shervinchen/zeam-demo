import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://free-to-play-games-database.p.rapidapi.com'
      : 'http://localhost:3000',
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
  },
});
