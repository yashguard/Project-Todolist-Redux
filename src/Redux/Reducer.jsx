import { AddToDo, RemoveToDo, ToggleToDo } from "./Action";

let initialstate = [{ data: [] }];

export const todo = (state = initialstate, action) => {
  switch (action.type) {
    case AddToDo:
      return [...state, ];

    default:
      return { state };
      break;
  }
};
