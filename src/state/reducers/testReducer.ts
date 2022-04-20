import { FetchAction } from "../action-types/index";
import { Action } from "../actions";

interface FetchDataInterface {
  data: string[];
  error: string | null;
  loading: boolean;
}

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const reducer = (
  state: FetchDataInterface = initialState,
  action: Action
): FetchDataInterface => {
  switch (action.type) {
    case FetchAction.FETCH_DATA:
      return { ...state, loading: true, data: [] };
    case FetchAction.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FetchAction.FETCH_DATA_FAIL:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
