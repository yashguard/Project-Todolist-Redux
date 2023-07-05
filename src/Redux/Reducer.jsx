import { Add_To_Do, Add_email } from "./ActionType";

let initialstate = { users: [{}] };

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case Add_To_Do:
      return { ...state, users: [{ id: action.id, todo: action.todo }] };

    case Add_email:
      return { ...state, users: [{ email: action.email }] };

    default:
      return state;
  }
};
