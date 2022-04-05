import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocalStorageState } from 'ahooks';
import Game from '../../components/Game';
import { GameItem } from '../../types';

const Home = () => {
  const [games, setGames] = useLocalStorageState<GameItem[]>('zeam-games', {
    defaultValue: [],
  });
  const [collectGameIds, setCollectGameIds] = useLocalStorageState<number[]>(
    'zeam-collect-game-ids',
    {
      defaultValue: [],
    }
  );

  useEffect(() => {
    axios.get('/api/games').then((response) => {
      const { data } = response;
      setGames(data);
    });
  }, []);

  const handleToggleLike = (game: GameItem, status: boolean) => {
    if (status) {
      setCollectGameIds([...collectGameIds, game.id]);
    } else {
      setCollectGameIds([...collectGameIds].filter((item) => item !== game.id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span>Genre</span>
          <i></i>
        </div>
      </div>
      <hr className="my-4 border-[#aaa]" />
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6">
        {games.map((game, key) => (
          <Game
            game={game}
            key={key}
            collectStatus={collectGameIds.includes(game.id)}
            toggleCollect={(status) => handleToggleLike(game, status)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
