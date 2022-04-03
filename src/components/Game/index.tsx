import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

interface GameItem {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  collect: boolean;
}

const Game = ({ game }: { game: GameItem }) => {
  const getPlatformTypes = (platform: string) => {
    const types = ['Windows', 'Browser'];
    return types.filter((item) => platform.indexOf(item) > -1);
  };

  return (
    <div className="max-w-[365px] rounded overflow-hidden bg-[#32383e] shadow-[0_8px_16px_0px_rgba(0,0,0,0.15)] transition ease-in-out delay-20 hover:scale-[1.02] cursor-pointer">
      <img className="max-w-full" src={game.thumbnail} alt={game.title} />
      <div className="p-5">
        <h4 className="text-[#aaa] overflow-hidden text-ellipsis whitespace-nowrap mb-2 text-xl">
          {game.title}
        </h4>
        <p className="text-[#7a8288] overflow-hidden text-ellipsis whitespace-nowrap mb-3 text-sm">
          {game.short_description}
        </p>
        <div className="flex items-center justify-between">
          <FontAwesomeIcon
            icon={solid('heart')}
            color={game.collect ? '#f87171' : ''}
            cursor="pointer"
          />
          <div className="flex items-center gap-x-2">
            <span className="text-[#272b30] bg-[#7a8288] rounded font-bold text-xs whitespace-nowrap px-1">
              {game.genre}
            </span>
            {getPlatformTypes(game.platform).includes('Windows') && (
              <FontAwesomeIcon icon={brands('windows')} />
            )}
            {getPlatformTypes(game.platform).includes('Browser') && (
              <FontAwesomeIcon icon={solid('window-maximize')} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
