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
                "name": "Camry",
                "description": "This is a Camry. This is a Camry. This is a Camry. This is a Camry",
                "price": "3,100,203,041 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-city.jpg"
            },
            {
                "id": 2,
                "name": "Ferrari",
                "description": "This is a Ferrari",
                "price": "6,900,203,041 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-jazz.jpg"
            },
            {
                "id": 3,
                "name": "Toyota",
                "description": "This is a Toyota",
                "price": "1,500,203,041 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-cr-v.jpg"
            },
            {
                "id": 4,
                "name": "Ford",
                "description": "This is a Ford",
                "price": "4,500,009,000 VND",
                "image": "https://www.honda.com.vn/asserts/images/honda-car/list-car/list-car-hr-v.jpg"
            },
            {
                "id": 5,
                "name": "Honda",
                "description": "This is a Honda",
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
