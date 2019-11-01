import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { List } from '../components';
import ProductDetail from './ProductDetail';
import ProductStore from '../stores/ProductStore';

const Products = (props) => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <List {...props} />
            </Route>
            <Route path={`${path}/:id`}>
                <ProductDetail />
            </Route>
        </Switch>
    );
}

export default Products;
