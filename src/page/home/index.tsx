import React from 'react';
import Game from '../../components/Game';

const games = [
  {
    id: 1,
    title: 'Dauntless',
    thumbnail: 'https://www.freetogame.com/g/1/thumbnail.jpg',
    short_description:
      'A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.',
    game_url: 'https://www.freetogame.com/open/dauntless',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Phoenix Labs',
    developer: 'Phoenix Labs, Iron Galaxy',
    release_date: '2019-05-21',
    freetogame_profile_url: 'https://www.freetogame.com/dauntless',
    collect: false,
  },
  {
    id: 2,
    title: 'World of Tanks',
    thumbnail: 'https://www.freetogame.com/g/2/thumbnail.jpg',
    short_description:
      'If you like blowing up tanks, with a quick and intense game style you will love this game!',
    game_url: 'https://www.freetogame.com/open/world-of-tanks',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Wargaming',
    developer: 'Wargaming',
    release_date: '2011-04-12',
    freetogame_profile_url: 'https://www.freetogame.com/world-of-tanks',
    collect: true,
  },
  {
    id: 3,
    title: 'Warframe',
    thumbnail: 'https://www.freetogame.com/g/3/thumbnail.jpg',
    short_description:
      'A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ',
    game_url: 'https://www.freetogame.com/open/warframe',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Digital Extremes',
    developer: 'Digital Extremes',
    release_date: '2013-03-25',
    freetogame_profile_url: 'https://www.freetogame.com/warframe',
    collect: false,
  },
  {
    id: 4,
    title: 'CRSED: F.O.A.D.',
    thumbnail: 'https://www.freetogame.com/g/4/thumbnail.jpg',
    short_description:
      'Take the battle royale genre and add mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)',
    game_url: 'https://www.freetogame.com/open/crsed',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Gaijin Distribution KFT',
    developer: 'Darkflow Software',
    release_date: '2019-12-12',
    freetogame_profile_url: 'https://www.freetogame.com/crsed',
    collect: true,
  },
  {
    id: 455,
    title: 'Eternal Fury',
    thumbnail: 'https://www.freetogame.com/g/455/thumbnail.jpg',
    short_description: 'A free-to-play ARPG from R2 Games!',
    game_url: 'https://www.freetogame.com/open/eternal-fury',
    genre: 'MMORPG',
    platform: 'Web Browser',
    publisher: 'R2 Games',
    developer: 'R2 Games',
    release_date: '2019-05-21',
    freetogame_profile_url: 'https://www.freetogame.com/eternal-fury',
    collect: false,
  },
  {
    id: 433,
    title: 'RuneScape',
    thumbnail: 'https://www.freetogame.com/g/433/thumbnail.jpg',
    short_description:
      'A popular 3D browser MMORPG boasting a huge player base and 15 years of content.',
    game_url: 'https://www.freetogame.com/open/runescape',
    genre: 'MMORPG',
    platform: 'PC (Windows), Web Browser',
    publisher: 'Jagex',
    developer: 'Jagex',
    release_date: '2001-01-04',
    freetogame_profile_url: 'https://www.freetogame.com/runescape',
    collect: true,
  },
];

function Home() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span>Genre</span>
          <i></i>
        </div>
      </div>
      <hr className="my-4 h-px bg-white" />
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6">
        {games.map((game) => (
          <Game game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;
