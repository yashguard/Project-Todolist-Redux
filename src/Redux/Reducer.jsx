import { Add_To_Do, Add_email } from "./ActionType";

let initialstate = { data: [] };

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case Add_To_Do:
      return { ...state, data: action.data };

    case Add_email:
      return {...state, email : action.email }

    default:
      return state;
  }
};
