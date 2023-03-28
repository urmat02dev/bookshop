import {
  GET_BASKET,
  GET_BOOKS, GET_LOGIN,
  GET_SEARCH
} from "./ActionTypes";

const initialState ={
    books:[],
    basket:JSON.parse(localStorage.getItem("basket")) || [],
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
      const foundProduct = state.basket.find(el => el.id === action.payload.id)
      if (foundProduct) {
        return{...state, basket: state.basket.map(el => el.id === foundProduct.id ?
            {...el, quantity: el.quantity + 1 , size:el.size, color:el.color} : el)}
      } else {
        return {...state, basket: [...state.basket, {...action.payload, quantity: 1, size:"", color:"" }]}
      }
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
