const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
    case 'GET_ERRORS':
        return action.data;
    default:
        return state;
    }
}
