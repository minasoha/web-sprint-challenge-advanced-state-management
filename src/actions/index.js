import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADDING_SMURF = "ADDING_SMURF";
export const ERROR = "ERROR";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        console.log(resp);
        dispatch({ type: FETCH_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};
export const fetchSuccess = (smurf) => {
  return { type: FETCH_SUCCESS, payload: smurf };
};

export const addSmurf = (smurf) => {
  return { type: ADDING_SMURF, payload: smurf };
};
export const fetchError = (err) => {
  return { type: FETCH_ERROR, payload: err };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
