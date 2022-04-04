import React, { Fragment } from 'react';
import Like from '../../components/Like';

const Game = () => {
  const str = `Dauntless is a free-to-play, co-op action RPG developed by independent
  studio Phoenix Labs — a studio made of of veteran developers from
  Bioware, Riot, Capcom, and Blizzard. Set in a science-fantasy world,
  Dauntless places players in the role of elite warriors called Slayers.
  These Slayers protect humanity from Behemoths that are consuming the
  land following a cataclysmic event that turned the landscape into
  ever-changing, floating islands.\r\n\r\nThe gameplay may remind
  players of Monster Hunter, or perhaps a cheerier version of Shadow of
  the Colossus, where the goal is to defeat massive creates in an vast
  landscape.\r\n\r\nDauntless is playable solo, although it is designed
  with co-op play in mind. It boasts a variety of unique encounters and
  rewards players with items that will allow them to upgrade weapons and
  armor — enabling them to become even stronger warriors.`;
  return (
    <div className="flex flex-col items-center">
      <img
        className="max-w-full mb-8"
        src="https://www.freetogame.com/g/1/thumbnail.jpg"
        alt="Drakensang Online"
      />
      <h1 className="text-3xl mb-4">Drakensang Online</h1>
      <div className="mb-4">
        <Like collect={false} size="lg" />
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">About</h3>
        <hr className="my-4 border-[#aaa]" />
        <div className="text-justify">
          {str.split('\r\n\r\n').map((item, key) => {
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
            <div className="text-[15px]">Dauntless</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Developer</div>
            <div className="text-[15px]">Phoenix Labs, Iron Galaxy</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Publisher</div>
            <div className="text-[15px]">Phoenix Labs</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Release Date</div>
            <div className="text-[15px]">May 21, 2019</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Genre</div>
            <div className="text-[15px]">MMORPG</div>
          </div>
          <div>
            <div className="text-[#7a8288] text-[15px]">Platform</div>
            <div className="text-[15px]">Windows</div>
          </div>
        </div>
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">Screenshots</h3>
        <hr className="my-4 border-[#aaa]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
          <img
            className="max-w-full h-full object-cover rounded"
            src="https://www.freetogame.com/g/1/dauntless-1.jpg"
            alt="screenshots"
          />
          <img
            className="max-w-full h-full object-cover rounded"
            src="https://www.freetogame.com/g/1/dauntless-2.jpg"
            alt="screenshots"
          />
          <img
            className="max-w-full h-full object-cover rounded"
            src="https://www.freetogame.com/g/1/dauntless-3.jpg"
            alt="screenshots"
          />
          <img
            className="max-w-full h-full object-cover rounded"
            src="https://www.freetogame.com/g/1/dauntless-4.jpg"
            alt="screenshots"
          />
        </div>
      </div>
      <div className="mb-8 w-full">
        <h3 className="text-2xl">Minimum System Requirements</h3>
        <hr className="my-4 border-[#aaa]" />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
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
        </div> */}
        <div className="text-justify text-[#7a8288] text-[15px]">
          <p className="mb-4">
            {`Drakensang Online`} is a browser based game and should run
            smoothly on practically any PC with a updated web-browser.
          </p>
          <p>
            If you have old hardware or software, you may still be able to play{' '}
            {`Drakensang Online`}, but your game experience may suffer. For the
            best gameplay experience, we recommend the latest versions of
            Firefox, Chrome, or Internet Explorer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
