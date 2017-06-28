import { combineReducers } from 'redux';

import {auth} from './auth';
// import {user} from './user';
// import {directory} from './directory';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;