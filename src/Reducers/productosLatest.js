import { FETCH_PRODUCTOSLATEST } from '../Actions/Actions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_PRODUCTOSLATEST:
			return action.payload;
		default:
			return state
	}
}