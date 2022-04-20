import { FetchAction } from "../action-types/index";

interface Fetch {
  type: FetchAction.FETCH_DATA;
}

interface FetchSuccess {
  type: FetchAction.FETCH_DATA_SUCCESS;
  payload: string[];
}

interface FetchFail {
  type: FetchAction.FETCH_DATA_FAIL;
  payload: string | null;
}

export type Action = Fetch | FetchSuccess | FetchFail;
