import React from 'react';
import logo from '../logo.svg';

class ProductDetail extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="product-detail-area">
                    <div className="product-detail-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="product-detail-controls">
                        <div className="form-group row">
                            <label htmlFor="productName">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="productDescription">Description</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="form-group row">
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
