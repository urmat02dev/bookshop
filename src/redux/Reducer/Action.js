import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./ActionTypes";
import firebase from "firebase/compat";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (email, password) => (dispatch) => {
  dispatch(loginRequest());

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(loginSuccess(user));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
