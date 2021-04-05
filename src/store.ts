import { createStore } from "redux";
import { formDataReducer } from "./reducers";

const store = createStore(formDataReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
