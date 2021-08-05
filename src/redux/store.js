import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsMainReducer from "./rootReducer";

const store = createStore(contactsMainReducer, composeWithDevTools());

export default store;
