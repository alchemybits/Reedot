import { FETCH_PRODUCTO_ID} from '../Actions/Actions';

export default function (state = {}, action){
	switch(action.type){
        case FETCH_PRODUCTO_ID:            
			return action.payload;
		default:
			return state
	}
}