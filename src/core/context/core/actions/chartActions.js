import { ADD_CHART_DATA } from "./types/chartActionTypes";

export const addChartData = (id) => {
  return {
    type: ADD_CHART_DATA,
    id,
  };
};
