import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IBook, IApplication} from "../models";
import {selectBook, IActionCreator} from "../actions";

interface IProps {
	books?: IBook[];
	selectBook?:IActionCreator<IBook,IBook>;
}

class Booklist extends React.Component<IProps, {}>{
	renderList() {
		return this.props.books.map(book =>
		<li 
			key={book.title} 
			className="list-group-item"
			onClick={() => this.props.selectBook(book)}>
			{book.title}
		</li>
		);
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList() }
			</ul>
		);
	}
}

function mapStateToProps(state: IApplication): IProps {
	return {
		books: state.books,		
	};
}

function mapDispatchToProps(dispatch:Redux.Dispatch){	
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);