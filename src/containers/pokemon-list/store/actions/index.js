import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE,
  } from './actionTypes';
  
  export const getPokemonList = information => ({
    type: GET_LIST_REQUEST,
    payload: information,
  });
  
  export const getPokemonListSuccess = response => ({
    type: GET_LIST_SUCCESS,
    response,
  });
  
  export const getPokemonListFailure = error => ({
    type: GET_LIST_FAILURE,
    error,
  });
