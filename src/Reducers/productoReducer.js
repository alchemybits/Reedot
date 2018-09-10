import { FETCH_PRODUCTOS } from '../Actions/Actions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_PRODUCTOS:
			return action.payload;
		default:
			return state
	}
}