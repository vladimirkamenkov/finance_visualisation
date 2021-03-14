const initState = {
    list: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        case 'SET_EXPENSES':
            return {
                ...state,
                list: action.data
            };

        default:
            return state;
    }
};
