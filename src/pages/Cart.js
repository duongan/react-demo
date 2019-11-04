import React from 'react';
import { List } from '../components';

const Cart = (props) => {
    return (
        <List data={props.cart} {...props} />
    );
}

export default Cart;
