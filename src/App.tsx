import React from 'react';
import {
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Home from './page/home';
import Game from './page/game';
import Collection from './page/collection';
import NoMatch from './page/no-match';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
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
