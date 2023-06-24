import { Add_To_Do } from "./ActionType";

let initialstate = { data: [] };

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case Add_To_Do:
      return { ...state, data: action.data };

    default:
      return state;
  }
};
