import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

const App: FC = () => {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<ProductListing/>}/>
        <Route path={'product/:id'} element={<ProductDetail/>}/>
          {/*</Route>*/}
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
