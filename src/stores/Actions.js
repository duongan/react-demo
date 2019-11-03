import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addProduct(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.ADD_PRODUCT,
            data
        });
    },
    deleteProduct(id) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_PRODUCT,
            id
        })
    },
    addToCart(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.ADD_TO_CART,
            data
        });
    },
    deleteFromCart(id) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_FROM_CART,
            id
        });
    }
};

export default Actions;
