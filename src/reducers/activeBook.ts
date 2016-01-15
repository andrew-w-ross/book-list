import {BOOK_SELECTED, IAction} from "../actions";
import {IBook} from "../models";

export default function reducer(state: IBook = null, action: IAction<IBook>) : IBook {
	console.dir(action);
	switch(action.type){
		case BOOK_SELECTED: return action.payload;
	}
	
	return state;
} 