import { combineReducers } from "redux";
import contactsItemReducer from "./contacts/contactsReducer";
import { contactsFilterReducer } from "./filter/filterReducer";

const contactsReducer = combineReducers({
  items: contactsItemReducer,
  filter: contactsFilterReducer,
});

const contactsMainReducer = combineReducers({
  contacts: contactsReducer,
});

export default contactsMainReducer;
