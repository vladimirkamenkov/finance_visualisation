import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import expenses from './expenses';
import errors from './errors';

export default combineReducers({
    form: formReducer,
    expenses,
    errors
});
