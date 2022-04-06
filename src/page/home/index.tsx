import React, { useEffect, useMemo, useState } from 'react';
import { useLocalStorageState } from 'ahooks';
import API from '../../utils/request';

import Game from '../../components/Game';
import Dropdown from '../../components/Dropdown';
import { GameItem } from '../../types';
import { useCollectGame } from '../../hooks';

const Home = () => {
  const [games, setGames] = useLocalStorageState<GameItem[]>('zeam-games', {
    defaultValue: [],
  });
  const [gameList, setGameList] = useState<GameItem[]>([]);
  const { collectGameIds, toggleCollect } = useCollectGame();
  const [sortValue, setSortValue] = useState('id');
  const [genreValue, setGenreValue] = useState('all');

  const sortOptions = [
    {
      label: 'Relevance',
      value: 'id',
    },
    {
      label: 'Release Date',
      value: 'release_date',
    },
  ];

  const genreOptions = useMemo(() => {
    return [
      { label: 'All', value: 'all' },
      ...Array.from(new Set(games.map((item) => item.genre))).map((item) => ({
        label: item,
        value: item,
      })),
    ];
  }, [games]);

  useEffect(() => {
    API.get('/api/games').then((response) => {
      const { data } = response;
      setGameList(data);
      setGames(data);
    });
  }, []);

  const handleSortGame = (value: string) => {
    setSortValue(value);
    if (value === 'id') {
      setGameList([...gameList].sort((a, b) => a.id - b.id));
    }
    if (value === 'release_date') {
      setGameList(
        [...gameList].sort((a, b) => {
          const aDate = new Date(a.release_date);
          const bDate = new Date(b.release_date);
          return aDate.getTime() - bDate.getTime();
        })
      );
    }
  };

  const handleFilterGame = (value: string) => {
    setGenreValue(value);
    if (value === 'all') {
      setGameList(games);
    } else {
      setGameList([...games].filter((item) => item.genre === value));
    }
  };

  const handleSearchGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === '') {
      setGameList(games);
    } else {
      setGameList(
        [...games].filter((item) =>
          item.title.toLocaleLowerCase().includes(value)
        )
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search for games"
          autoComplete="off"
          className="w-1/4 min-w-[160px] h-6 leading-6 py-4 px-4 bg-[#1c1e22] rounded-md text-[16px] text-[#7a8288]"
          onChange={handleSearchGame}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-x-8">
          <div className="flex items-center">
            <span className="text-[#7a8288] text-[15px] mr-2">Sort By:</span>
            <Dropdown
              defaultValue="id"
              value={sortValue}
              options={sortOptions}
              onChange={handleSortGame}
            />
          </div>
          <div className="flex items-center">
            <span className="text-[#7a8288] text-[15px] mr-2">Genre:</span>
            <Dropdown
              defaultValue="all"
              value={genreValue}
              options={genreOptions}
              onChange={handleFilterGame}
            />
          </div>
        </div>
      </div>
      <hr className="my-4 border-[#aaa]" />
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6">
        {gameList.map((game, key) => (
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
};

export default Home;
