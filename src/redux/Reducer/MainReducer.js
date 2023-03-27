import {
  GET_BASKET,
  GET_BOOKS, GET_LOGIN,
  GET_SEARCH
} from "./ActionTypes";

const initialState ={
    books:[],
    basket:[],
    input : "",
    results:[],
    auth:[],
    user:{
      username:null,
      email:null,
      password:null
    },



}

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS :{
        return {...state, books: action.payload}
    }
    case GET_BASKET :{
      return {...state, basket: [action.payload]}
    }
    case GET_SEARCH :{
      return {...state, input: action.payload}
    }
    case GET_LOGIN : {
      return {
        ...state, user: action.payload
      }
    }


    default :
      return state
  }
}
