import { Add_To_Do, Add_email } from "./ActionType";

export const Add = (data) => {
  return { type: Add_To_Do, data };
};

export const AddEmail = (email) => {
  return {type:Add_email, email}
}