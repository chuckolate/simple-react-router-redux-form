import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
	case DELETE_POST:
		return _.omit(state, action.payload);
	case FETCH_POST:
		return { ...state, [action.payload.data.id]: action.payload.data }; /* not creating array!!! we are doign key interpolation => whatever the variable action payload data id is, make a new key on this object using this value, set its value equal to action.payload.data  */
	case FETCH_POSTS:
		/* the lodash library takes an array of objects and maps a key to them using the second parameter. [ post1, post2 ] becomes { 1:{post1}, 2:{post2} }*/
		return _.mapKeys(action.payload.data, 'id');
	default:
		return state;
	}
}