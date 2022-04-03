import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import Home from './page/home';
import Game from './page/game';
import Collection from './page/collection';
import NoMatch from './page/no-match';

function Layout() {
  return (
    <div className="flex flex-col items-center mx-auto w-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-h-screen pt-20 px-4">
      <h1 className="text-3xl mb-10">Zeam</h1>
      <nav className="text-center">
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link to="/" className="hover:text-[#fff]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/collection" className="hover:text-[#fff]">
              Collection
            </Link>
          </li>
        </ul>
      </nav>
      <main className="mt-10">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="collection" element={<Collection />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
