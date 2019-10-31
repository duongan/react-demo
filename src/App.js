import React from 'react';
import { Switch, Route, useLocation, useParams } from 'react-router-dom';
import './App.css';
import { Home, Contact, Products, ProductDetail } from './pages';
import { MainMenu } from './components';

function App() {
  console.log(useParams());
  return (
    <>
      <MainMenu />
      <div>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
