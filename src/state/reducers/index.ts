import { combineReducers } from "redux";
import testReduer from "./testReducer";

const reducers = combineReducers({
  test: testReduer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
