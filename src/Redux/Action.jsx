import { Add_To_Do, Add_email } from "./ActionType";

export const Add = (todo, id) => {
  return { type: Add_To_Do, todo, id };
};

export const AddEmail = (email) => {
  return {type:Add_email, email}
}