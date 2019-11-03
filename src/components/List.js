import React from 'react';
import { Button } from 'react-bootstrap';
import './List.css';
import Item from './Item';

class List extends React.Component {

    renderList() {
        const { list, onDelete } = this.props;
        return list.map(item => {
            return (
                    <div className="col-sm-4" style={{marginTop: "30px"}} key={item.id}>
                        <Item product={item} onDelete={onDelete} />
                    </div>
                );
        });
    }

    render() {
        return (
            <>
                <Button style={ {marginTop: "20px"} } variant="primary">Add Car</Button>
                <div className="row">
                    {this.renderList()}
                </div>
            </>
        );
    }
}

export default List;
