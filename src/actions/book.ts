import {IBook} from "../models";
import {IAction} from "./action";

export const BOOK_SELECTED = 'BOOK_SELECTED';

export function selectBook(book: IBook):IAction<IBook>{
	return {
		payload : book,
		type : BOOK_SELECTED
	};
}