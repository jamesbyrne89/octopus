import { compose, createStore } from "redux";
import { formDataReducer } from "./reducers";

const store = createStore(
  formDataReducer
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //     trace: true, // (action) => { return ‘trace as string’; }
  //     traceLimit: 25,
  //   })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
