import {
    GET_DETAIL_REQUEST,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILURE,
  } from './actionTypes';
  
  export const getPokemonDetail = information => ({
    type: GET_DETAIL_REQUEST,
    payload: information,
  });
  
  export const getPokemonDetailSuccess = response => ({
    type: GET_DETAIL_SUCCESS,
    response,
  });
  
  export const getPokemonDetailFailure = error => ({
    type: GET_DETAIL_FAILURE,
    error,
  });
