import { combineReducers } from "redux";
import contactsItemReducer from "./contacts/contactsReducer";
import contactsFilterReducer from "./filter/filterReducer";

const contactsReducer = combineReducers({
  items: contactsItemReducer,
  filter: contactsFilterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
