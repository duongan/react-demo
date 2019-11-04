import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import logo from '../logo.svg';

class Item extends React.Component {
    onDelete = () => this.props.onDelete(this.props.product.id);
    addToCart = () => this.props.onAddToCart(this.props.product);
    render() {
        const { product } = this.props;
        const link = `/products/${product.id}`;
        return (
            <div className="card">
                <img src={logo} className="card-img-top" alt="logo" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="btn-group" role="group" aria-label="Cart buttons">
                        <Link className="btn btn-outline-primary" to={link}>View</Link>
                        {/* <button type="button" className="btn btn-outline-primary" onClick={this.addToCart}>Add to Cart</button> */}
                        <button type="button" className="btn btn-outline-primary" onClick={this.onDelete}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
