import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { List } from '../components';
import ProductDetail from './ProductDetail';

const Products = (props) => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <List data={props.list} {...props} />
            </Route>
            <Route path={`${path}/:id`}>
                <ProductDetail {...props} />
            </Route>
        </Switch>
    );
}

export default Products;
