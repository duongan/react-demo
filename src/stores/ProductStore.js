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
                "description": "This is a Camry"
            },
            {
                "id": 2,
                "name": "Ferrari",
                "description": "This is a Ferrari"
            },
            {
                "id": 3,
                "name": "Toyota",
                "description": "This is a Toyota"
            },
            {
                "id": 4,
                "name": "Ford",
                "description": "This is a Ford"
            },
            {
                "id": 5,
                "name": "Honda",
                "description": "This is a Honda"
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
