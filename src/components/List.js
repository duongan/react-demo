import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './List.css';
import Item from './Item';

export default class List extends React.Component {

    list = [
        {
            id: 1,
            name: 'Camry',
            description: 'This is a Camry'
        },
        {
            id: 2,
            name: 'Ferrari',
            description: 'This is a Ferrari'
        },
        {
            id: 3,
            name: 'Toyota',
            description: 'This is a Toyota'
        },
        {
            id: 4,
            name: 'Ford',
            description: 'This is a Ford'
        },
    ];

    renderList() {
        return this.list.map(item => {
            return (
                    <ListGroup.Item key={item.id}>
                        <Item car={item} />
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
