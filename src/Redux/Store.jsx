import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";

export let store = legacy_createStore(reducer);
// export const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
