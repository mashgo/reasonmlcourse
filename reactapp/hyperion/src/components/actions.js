export function incrementValue() {
    return function (dispatch) {
        dispatch({ type: 'INCREMENT' });
    }
}

export function decrementValue() {
    return function (dispatch) {
        dispatch({ type: 'DECREMENT' });
    }
}