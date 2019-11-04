import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

class CartStore extends ReduceStore {

    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.ADD_TO_CART:
                state.push(action.data);
                return state;
            case ActionTypes.DELETE_FROM_CART:
                return state.filter(item => item.id !== action.id);
            default:
                return state;
        }
    }
}

export default new CartStore();
