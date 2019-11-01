import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './List.css';
import Item from './Item';

class List extends React.Component {

    renderList() {
        const { list, onDelete } = this.props; 
        return list.map(item => {
            return (
                    <ListGroup.Item key={item.id}>
                        <Item product={item} onDelete={onDelete} />
                    </ListGroup.Item>
                );
        });
    }

    render() {
        return (
            <div className="container">
                <Button style={ {marginTop: "20px", marginBottom: "20px"} } variant="primary">Add Car</Button>
                <ListGroup variant="flush">
                    {this.renderList()}
                </ListGroup>
            </div>
        );
    }
}

export default List;
