import {
    GET_DETAIL_REQUEST,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILURE
  } from '../actions/actionTypes';
  
  const initialState = {
    detail: {},
    loading: false,
    error: false
  }
  
  const reducer = (state = initialState, action) => {
    const { type, response } = action;
    switch(type) {
      case GET_DETAIL_REQUEST:
        return {
          ...state,
          detail: {},
          loading: true,
          error: false
        }
      case GET_DETAIL_SUCCESS:
        return {
          ...state,
          detail: response,
          loading: false
        }
      case GET_DETAIL_FAILURE:
        return {
          ...state,
          detail: {},
          loading: false,
          error: true
        }
      default:
        return state;
    }
  }
  
  export default reducer;