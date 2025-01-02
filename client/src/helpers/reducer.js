export const fetchReducerStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case fetchReducerStates.LOADING:
      return { ...state, isLoading: true };
    case fetchReducerStates.SUCCESS:
      return { data: action.data, isLoading: false, error: "" };
    case fetchReducerStates.ERROR:
      return { data: null, isLoading: false, error: action.error };
    default:
      throw new Error("Uknow action type");
  }
};
