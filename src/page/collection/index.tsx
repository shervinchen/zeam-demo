import React from 'react';
import { useLocalStorageState } from 'ahooks';
import Game from '../../components/Game';
import { GameItem } from '../../types';
import { useCollectGame } from '../../hooks';

function Collection() {
  const [games, setGames] = useLocalStorageState<GameItem[]>('zeam-games', {
    defaultValue: [],
  });
  const { collectGameIds, toggleCollect } = useCollectGame();

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6">
        {games
          .filter((item) => collectGameIds.includes(item.id))
          .map((game, key) => (
            <Game
              game={game}
              key={game.id}
              collectStatus={collectGameIds.includes(game?.id)}
              toggleCollect={(status) => toggleCollect(status, game?.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Collection;
