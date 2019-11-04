import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Home, Contact, Products, Cart } from './pages';
import { MainMenu } from './components';
import ProductStore from './stores/ProductStore';
import CartStore from './stores/CartStore';
import { Container } from 'flux/utils';
import Actions from './stores/Actions';

function App(props) {
  return (
    <>
        <MainMenu {...props} />   
        <div className="container App-container"> 
          <Switch>
            <Route path="/products">
              <Products {...props} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart {...props} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </>
  );
}

function getStores() {
    return [ProductStore, CartStore];
  }

function getState() {
    return {
        list: ProductStore.getState(),
        cart: CartStore.getState(),
        onDelete: Actions.deleteProduct,
        onAddToCart: Actions.addToCart,
        onDeleteFromCart: Actions.deleteFromCart
    };
}

export default Container.createFunctional(App, getStores, getState);
