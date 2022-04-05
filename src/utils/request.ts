import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://free-to-play-games-database.p.rapidapi.com'
      : 'http://localhost:3000',
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': '0e06f076b6msh78bec355a08536bp1820b2jsn154dad40b979',
  },
});
