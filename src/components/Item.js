import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends React.Component {
    onDelete = () => this.props.onDelete(this.props.product.id);
    render() {
        const { product } = this.props;
        const link = `/products/${product.id}`;
        return (
            // <div className="list-item">
            //     <div className="item-img">
            //         <img src={logo} className="item-logo" alt="logo" />
            //     </div>
            //     <div className="item-detail">
            //         <strong>{product.name}</strong>
            //         <p>{product.description}</p>
            //     </div>
            //     <div className="item-actions">
            //         <ButtonGroup size="sm">
            //             <Button variant="outline-secondary">Add to Cart</Button>
            //             <Button variant="outline-secondary" href={link}>View</Button>
            //             <Button variant="outline-secondary" onClick={this.onDelete}>Remove</Button>
            //         </ButtonGroup>
            //     </div>
            // </div>
            <div className="card">
                <img src={product.image} className="card-img-top" alt="logo" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="btn-group" role="group" aria-label="Cart buttons">
                        <Link className="btn btn-outline-primary" to={link}>View</Link>
                        <button type="button" className="btn btn-outline-primary">Add to Cart</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.onDelete}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
