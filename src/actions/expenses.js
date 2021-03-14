import { API } from '../api';

export const getExpenses = (values) => async dispatch => {
    const res = await fetch(API.GET_EXPENSES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    });
    const data = await res.json();

    dispatch({ type: 'SET_EXPENSES', data });
};