import React from 'react';
import { useLocalStorageState } from 'ahooks';
import Game from '../../components/Game';
import { GameItem } from '../../types';

function Collection() {
  const [games, setGames] = useLocalStorageState<GameItem[]>('zeam-games', {
    defaultValue: [],
  });
  const [collectGameIds, setCollectGameIds] = useLocalStorageState<number[]>(
    'zeam-collect-game-ids',
    {
      defaultValue: [],
    }
  );

  const handleToggleLike = (game: GameItem, status: boolean) => {
    if (status) {
      setCollectGameIds([...collectGameIds, game.id]);
    } else {
      setCollectGameIds([...collectGameIds].filter((item) => item !== game.id));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6">
        {games
          .filter((item) => collectGameIds.includes(item.id))
          .map((game, key) => (
            <Game
              game={game}
              key={game.id}
              collectStatus={collectGameIds.includes(game.id)}
              toggleCollect={(status) => handleToggleLike(game, status)}
            />
          ))}
      </div>
    </div>
  );
}

export default Collection;
