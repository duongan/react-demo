import React from 'react';
import logo from '../logo.svg';
import { ButtonGroup, Button } from 'react-bootstrap';
import './Item.css';

class Item extends React.Component {
    render() {
        const { name, description, id } = this.props.car;
        const link = `/products/${id}`;
        return (
            <div className="list-item">
                <div className="item-img">
                    <img src={logo} className="item-logo" alt="logo" />
                </div>
                <div className="item-detail">
                    <strong>{name}</strong>
                    <p>{description}</p>
                </div>
                <div className="item-actions">
                    <ButtonGroup size="sm">
                        <Button variant="outline-secondary">Add to Cart</Button>
                        <Button variant="outline-secondary" href={link}>Edit</Button>
                        <Button variant="outline-secondary">Remove</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Item;
