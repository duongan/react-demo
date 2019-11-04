import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';
import Item from './Item';

class List extends React.Component {

    renderList() {
        const { data, onDelete, onAddToCart } = this.props;
        return data.map(item => {
            return (
                    <div className="col-sm-4" style={{marginTop: "30px"}} key={item.id}>
                        <Item product={item} onDelete={onDelete} onAddToCart={onAddToCart}/>
                    </div>
                );
        });
    }

    render() {
        return (
            <>
                {/* <Link className="btn btn-primary" style={ {marginTop: "20px"} } to={'/products/new'}>Add Item</Link> */}
                <div className="row">
                    {this.renderList()}
                </div>
            </>
        );
    }
}

export default List;
