import {combineReducers} from "redux";
import rootReducers from './keyReducers'

const calculatorApp = combineReducers({
	item : rootReducers
})

export default calculatorApp;