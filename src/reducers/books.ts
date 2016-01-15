import {IBook} from "../models";
const initialState: IBook[] = [
	{ title: 'Javascript The Good Parts', pages : 329 },
	{ title: 'Harry Potter' , pages : 216 },
	{ title: 'The colour of magic', pages : 101 },
	{ title: 'Lord of the rings', pages : 716 }
];

export default function bookReducer(state: IBook[] = initialState) {
	return state;
}