import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

class ProductStore extends ReduceStore {

    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return [
            {
                "id": 1,
                "name": "Item 1",
                "description": "This is a Item 1",
                "price": "3,100,203,041 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-city.jpg"
            },
            {
                "id": 2,
                "name": "Item 2",
                "description": "This is a Item 2",
                "price": "6,900,203,041 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-jazz.jpg"
            },
            {
                "id": 3,
                "name": "Item 3",
                "description": "This is a Item 3",
                "price": "1,500,203,041 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-cr-v.jpg"
            },
            {
                "id": 4,
                "name": "Item 4",
                "description": "This is a Item 4",
                "price": "4,500,009,000 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-hr-v.jpg"
            },
            {
                "id": 5,
                "name": "Item 5",
                "description": "This is a Item 5",
                "price": "1,220,000,000 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-accord.png"
            },
            {
                "id": 6,
                "name": "Item 6",
                "description": "This is a Item 5",
                "price": "1,220,000,000 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-accord.png"
            }
        ];
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.ADD_PRODUCT:
                return state;
            case ActionTypes.DELETE_PRODUCT:
                return state.filter(item => item.id !== action.id);
            default:
                return state;
        }
    }
}

export default new ProductStore();
