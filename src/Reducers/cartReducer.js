import { FETCH_CART } from '../Actions/Actions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_CART:
			return action.payload;
		default:
			return state
	}
}