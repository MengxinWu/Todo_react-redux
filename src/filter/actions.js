import {SET_FILTER} from './actionTypes';

// define action constructor
export const setFilter = (filterType) => ({
	type: SET_FILTER,
	filter: filterType
});