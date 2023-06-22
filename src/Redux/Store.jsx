import { legacy_createStore } from "redux";
import { todo } from "./Reducer";

export let store = legacy_createStore(todo)