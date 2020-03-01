import { combineReducers } from 'redux';

import sessionErrorsreducer from './session_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
});

export default errorsReducer;

