import { UPDATE_FILTER_VALUE } from "../constants/constants";

export const updateFilterValue = (value = "") => ({
  type: UPDATE_FILTER_VALUE,
  payload: value,
});
