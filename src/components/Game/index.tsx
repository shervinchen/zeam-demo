import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Like from '../Like';
import { GameItem } from '../../types';
import { getPlatformTypes } from '../../utils';

interface GameProps {
  game: GameItem;
  collectStatus: boolean;
  toggleCollect: (status: boolean) => void;
}

const Game = ({ game, collectStatus, toggleCollect }: GameProps) => {
  return (
    <Link
      to={`/game/${game.id}`}
      className="max-w-[365px] rounded overflow-hidden bg-[#32383e] shadow-[0_8px_16px_0px_rgba(0,0,0,0.15)] transition ease-in-out delay-20 hover:scale-[1.02] cursor-pointer"
    >
      <img className="max-w-full" src={game.thumbnail} alt={game.title} />
      <div className="p-5">
        <h4 className="text-[#aaa] overflow-hidden text-ellipsis whitespace-nowrap mb-2 text-xl">
          {game.title}
        </h4>
        <p className="text-[#7a8288] overflow-hidden text-ellipsis whitespace-nowrap mb-3 text-sm">
          {game.short_description}
        </p>
        <div className="flex items-center justify-between">
          <div onClick={(e) => e.preventDefault()}>
            <Like
              status={collectStatus}
              toggle={(status) => toggleCollect(status)}
            />
          </div>
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
    </Link>
  );
};

export default Game;
