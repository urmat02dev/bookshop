import {GET_BASKET, GET_BOOKS} from "./ActionTypes";

const initialState ={
    books:[],
    basket:[]
}

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS :{
        return {...state, books: action.payload}
    }
    case GET_BASKET :{
      return {...state, basket: action.payload}
    }


    default :
      return state
  }
}
