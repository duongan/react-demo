import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    const { id } = useParams();
    const { list, onAddToCart } = props;
    const product = list.find(item => item.id === parseInt(id));
    const addToCart = () => onAddToCart(product);
    return (
        <div className="container">
            <div className="product-detail-area">
                <div className="product-detail-logo">
                    <img src={product.image} alt="logo"/>
                </div>
                {/* <div className="product-detail-controls">
                    <div className="form-group row">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Name</span>
                            </div>
                            <input type="text" readOnly className="form-control" placeholder="Product name" value={product.name} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="productDescription">Description</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group row">
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div> */}
                <div className="card" style={{width: "45rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary">Edit</button>
                            <button type="button" className="btn btn-outline-primary" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
