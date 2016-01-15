import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IBook, IApplication} from "../models";

interface IProps {
	selectedBook?: IBook;
}

class BookDetail extends React.Component<IProps, {}>{
	renderBookDetail(){
		if(!this.props.selectedBook){
			return <h1>No Book Selected</h1>;
		}
		
		return (
			<div>
				<h1>Title : {this.props.selectedBook.title}</h1>
				<h1>Pages : {this.props.selectedBook.pages}</h1>
			</div>
		);
	}
	
	render(){
		return (
			<div className="col-sm-8">
				{this.renderBookDetail()}
			</div>	
		);
	}
}

function mapStateToProps(state:IApplication):IProps{
	return {
		selectedBook : state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);