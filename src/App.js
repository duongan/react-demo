import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import './App.css';
import { Home, Contact, Products, ProductDetail } from './pages';
import { MainMenu } from './components';
import ProductStore from './stores/ProductStore';
import { Container } from 'flux/utils';
import Actions from './stores/Actions';

function App(props) {
  return (
    <>
      <Router>
        <div>
          <MainMenu />    
          <Switch>
            <Route path="/products">
              <Products {...props} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

function getStores() {
    return [ProductStore];
  }

function getState() {
    return {
        list: ProductStore.getState(),
        onDelete: Actions.deleteProduct
    };
}

export default Container.createFunctional(App, getStores, getState);
