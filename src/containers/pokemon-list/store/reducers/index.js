import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE
  } from '../actions/actionTypes';
  import { COOKIES_LIST, getNewTime } from '@Utils/utils';
  import Cookies from 'universal-cookie';

  const initialState = {
    pageNumber: 0,
    pokemonList: []
  }
  
  const reducer = (state = initialState, action) => {
    const { type, response } = action;
    const cookies = new Cookies();

    switch(type) {
      case GET_LIST_REQUEST:
        return state
      case GET_LIST_SUCCESS:
        const shortList = response.map((item) => ({name: item.name}));
        const newList = state.pokemonList.concat(shortList);
        cookies.set(COOKIES_LIST+(state.pageNumber+1), shortList, {path: '/', expires: getNewTime(60*24)});
        return {
          ...state,
          pokemonList: newList,
          pageNumber: state.pageNumber+1
        }
      case GET_LIST_FAILURE:
        return {
          ...state,
          pokemonList: [],
          pageNumber: 0
        }
      default:
        return state;
    }
  }
  
  export default reducer;