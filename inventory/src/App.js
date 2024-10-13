import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navi } from './components/Navi';
import { Add } from './components/Add';
import { Update } from './components/Update';
import { DispAll } from './components/DispAll';
import { Search } from './components/Search';
import { DispCat } from './components/DispCat';
import { DispLow } from './components/DispLow';
import { Home } from './components/Home';
import { Remove } from './components/Remove';
import { Sort } from './components/Sort';

function App() {

  const [items, setItems] = useState([]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navi />}>
          <Route index element={<Home items={items}/>} />
          <Route path='add' element={<Add setItems={setItems}/>} />
          <Route path='update' element={<Update setItems={setItems} items={items}/>} />
          <Route path='remove' element={<Remove setItems={setItems} items={items}/>} />
          <Route path='discat' element={<DispCat items={items}/>} />
          <Route path='dispall' element={<DispAll items={items}/>} />
          <Route path='search' element={<Search items={items}/>} />
          <Route path='sort' element={<Sort items={items}/>} />
          <Route path='displow' element={<DispLow items={items}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
