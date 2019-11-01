import React from 'react';
import logo from '../logo.svg';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends React.Component {
    onDelete = () => this.props.onDelete(this.props.product.id);
    render() {
        const { product } = this.props;
        const link = `/products/${product.id}`;
        return (
            <div className="list-item">
                <div className="item-img">
                    <img src={logo} className="item-logo" alt="logo" />
                </div>
                <div className="item-detail">
                    <strong>{product.name}</strong>
                    <p>{product.description}</p>
                </div>
                <div className="item-actions">
                    <ButtonGroup size="sm">
                        <Button variant="outline-secondary">Add to Cart</Button>
                        <Button variant="outline-secondary" href={link}>Edit</Button>
                        <Button variant="outline-secondary" onClick={this.onDelete}>Remove</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Item;
