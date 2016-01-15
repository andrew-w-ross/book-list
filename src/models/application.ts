import {IBook} from "./book";

export interface IApplication{
	books:IBook[];
	activeBook:IBook;
}