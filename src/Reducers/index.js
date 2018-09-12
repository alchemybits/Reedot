import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productoReducer from './productoReducer';
import requestReducer from './requestReducer';
import thumbnailReducer from './thumbnailReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import productoDetailReducer from './productoDetailReducer';

const rootReducer = combineReducers({
	form: formReducer,
	count: 42,
	name: "Armando",
	productos: productoReducer,
	productoDetail: productoDetailReducer,
	requests: requestReducer,
	thumbnails: thumbnailReducer,
	user: userReducer,
	cart: cartReducer
});

export default rootReducer;