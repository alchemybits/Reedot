import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productoReducer from './productoReducer';
import thumbnailReducer from './thumbnailReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	form: formReducer,
	count: 42,
	name: "Armando",
	productos: productoReducer,
	thumbnails: thumbnailReducer,
	user: userReducer,
	cart: cartReducer
});

export default rootReducer;