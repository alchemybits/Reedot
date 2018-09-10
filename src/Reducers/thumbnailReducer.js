import { FETCH_THUMBNAILS } from '../Actions/Actions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_THUMBNAILS:
			return action.payload;
		default:
			return state
	}
}