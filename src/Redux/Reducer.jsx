import { AddToDo } from "./Action";

let initialstate = [{ data: [] }];

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case AddToDo:
      return { ...state, data: action.data };

    default:
      return { state };
  }
};
