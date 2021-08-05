import { ADD_CONTACT, REMOVE_CONTACT_BY_ID } from "../constants/constants";

const contactsItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case REMOVE_CONTACT_BY_ID:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default contactsItemReducer;
