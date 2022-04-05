import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocalStorageState } from 'ahooks';
import Like from '../../components/Like';
import { GameInfo } from '../../types';
import { getPlatformTypes } from '../../utils';

const Game = () => {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState<GameInfo>();
  const [collectGameIds, setCollectGameIds] = useLocalStorageState<
    (number | undefined)[]
  >('zeam-collect-game-ids', {
    defaultValue: [],
  });

  useEffect(() => {
    axios.get(`/api/game?id=${id}`).then((response) => {
      const { data } = response;
      setGameInfo(data);
    });
  }, []);

  const handleToggleLike = (status: boolean) => {
    if (status) {
      setCollectGameIds([...collectGameIds, gameInfo?.id]);
    } else {
      setCollectGameIds(
        [...collectGameIds].filter((item) => item !== gameInfo?.id)
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img
        className="max-w-full mb-8"
        src={gameInfo?.thumbnail}
        alt={gameInfo?.title}
      />
      <h1 className="text-3xl mb-4">{gameInfo?.title}</h1>
      <div className="mb-4">
        <Like
          status={collectGameIds.includes(gameInfo?.id)}
          size="lg"
          toggle={(status) => handleToggleLike(status)}
        />
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">About</h3>
        <hr className="my-4 border-[#aaa]" />
        <div className="text-justify">
          {gameInfo?.description.split('\r\n\r\n').map((item, key) => {
            return (
              <p key={key} className="text-[15px]">
                {key !== 0 && <br />}
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">Information</h3>
        <hr className="my-4 border-[#aaa]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
          <div>
            <div className="text-[#7a8288] text-[15px]">Title</div>
            <div className="text-[15px]">{gameInfo?.title}</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Developer</div>
            <div className="text-[15px]">{gameInfo?.developer}</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Publisher</div>
            <div className="text-[15px]">{gameInfo?.publisher}</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Release Date</div>
            <div className="text-[15px]">{gameInfo?.release_date}</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Genre</div>
            <div className="text-[15px]">{gameInfo?.genre}</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Platform</div>
            <div className="text-[15px]">{gameInfo?.platform}</div>
          </div>
        </div>
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">Screenshots</h3>
        <hr className="my-4 border-[#aaa]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
          {gameInfo?.screenshots.map((item, key) => {
            return (
              <img
                key={item.id}
                className="max-w-full h-full object-cover rounded"
                src={item.image}
                alt="screenshots"
              />
            );
          })}
        </div>
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">Minimum System Requirements</h3>
        <hr className="my-4 border-[#aaa]" />
        {getPlatformTypes(gameInfo?.platform ?? '').includes('Windows') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            <div>
              <div className="text-[#7a8288] text-[15px]">OS</div>
              <div className="text-[15px]">Windows 7 DX11 Support</div>
            </div>
            <div>
              <div className="text-[#7a8288] text-[15px]">Processor</div>
              <div className="text-[15px]">CPU: i5 SandyBridge</div>
            </div>
            <div>
              <div className="text-[#7a8288] text-[15px]">Memory</div>
              <div className="text-[15px]">4GB</div>
            </div>
            <div>
              <div className="text-[#7a8288] text-[15px]">Graphics</div>
              <div className="text-[15px]">
                GPU: nVidia 660Ti (DX11) or equivalent
              </div>
            </div>
            <div>
              <div className="text-[#7a8288] text-[15px]">Storage</div>
              <div className="text-[15px]">15GB of storage space</div>
            </div>
            <div>
              <div className="text-[#7a8288] text-[15px]">Additional Notes</div>
              <div className="text-[15px]">
                Specifications may change during development
              </div>
            </div>
          </div>
        )}
        {getPlatformTypes(gameInfo?.platform ?? '').includes('Browser') && (
          <div className="text-justify text-[#7a8288] text-[15px]">
            <p className="mb-4">
              {`Drakensang Online`} is a browser based game and should run
              smoothly on practically any PC with a updated web-browser.
            </p>
            <p>
              If you have old hardware or software, you may still be able to
              play {`Drakensang Online`}, but your game experience may suffer.
              For the best gameplay experience, we recommend the latest versions
              of Firefox, Chrome, or Internet Explorer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
