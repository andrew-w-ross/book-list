/// <reference path="../typings/browser.d.ts" />
import "../style/style";
import "babel-polyfill";

import * as React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {createStore} from "redux";
import {Provider} from "react-redux";

import rootReducer from "./reducers";
const store = createStore(rootReducer);

render(
	<Provider store={store} >
		<App ></App >
	</Provider >	
	, document.querySelector(".container")
);