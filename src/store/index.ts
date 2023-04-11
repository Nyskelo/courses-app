import {
	applyMiddleware,
	legacy_createStore as createStore,
	combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { authorsReducer } from './authors/authorsReducer';
import { coursesReducer } from './courses/coursesReducer';
import { stateReducer } from './state/stateReducer';
import { userReducer } from './user/userReducer';
import { RootState } from './storeTypes';

export const rootReducer = combineReducers({
	state: stateReducer,
	authors: authorsReducer,
	courses: coursesReducer,
	user: userReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState>))
);
export default store;
