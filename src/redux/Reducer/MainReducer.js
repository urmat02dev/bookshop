import {
  GET_BASKET,
  GET_BOOKS,
  GET_RESULTS,
  GET_SEARCH
} from "./ActionTypes";

const initialState ={
    books:[],
    basket:[],
    input : "",
    results:[],
    auth:[],

}

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS :{
        return {...state, books: action.payload}
    }
    case GET_BASKET :{
      return {...state, basket: [...state.basket,action.payload]}
    }
    case GET_SEARCH :{
      return {...state, input: action.payload}
    }
    case GET_RESULTS :{
      return {...state, results: action.payload}
    }


    default :
      return state
  }
}
