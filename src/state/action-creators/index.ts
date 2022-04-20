import { Dispatch } from "redux";
import { FetchAction } from "../action-types";
import { Action } from "../actions/index";
import axios from "axios";

//Fetch data from dummy api
export const fetchData = (type: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FetchAction.FETCH_DATA });
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${type}`
      );
      dispatch({
        type: FetchAction.FETCH_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({ type: FetchAction.FETCH_DATA_FAIL, payload: error.message });
    }
  };
};
