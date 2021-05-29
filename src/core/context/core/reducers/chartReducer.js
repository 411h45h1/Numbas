import { ADD_CHART_DATA } from "../actions/types/chartActionTypes";

const initState = {};

const chartReducer = (state = initState, action) => {
  if (action.type === ADD_CHART_DATA) {
    return {
      ...state,
    };
  }

  if (!action.type) {
    return state;
  }
};

export default chartReducer;
