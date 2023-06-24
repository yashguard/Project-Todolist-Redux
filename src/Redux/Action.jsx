import { Add_To_Do } from "./ActionType";

export const Add = (data) => {
  return { type: Add_To_Do, data };
};
