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
    }
};

export default Actions;
