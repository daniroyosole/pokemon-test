import { put } from 'redux-saga/effects';
import { getPokemonDetails } from '@Services/pokemon';
import {
  getPokemonDetailSuccess,
  getPokemonDetailFailure,
} from '../actions';
import Cookies from 'universal-cookie';
import { COOKIES_DETAIL, getNewTime } from '@Utils/utils';

export function* getDetail({payload}) {
  try {
    const response = yield getData(payload);
    console.log(response)
    if (typeof response !== "undefined" && typeof response.id !== "undefined") {
      const cookies = new Cookies();
      let responseCookie = response
      if (typeof response.nmoves === "undefined") {
        responseCookie = {
          name: response.name,
          id: response.id,
          types: response.types,
          nmoves: response.moves.length
        }
      }
      cookies.set(COOKIES_DETAIL+payload, responseCookie, {path: '/', expires: getNewTime(60*24)});
      yield put(getPokemonDetailSuccess(responseCookie));
    } else {
      yield put(getDetailFailure({}));
    }
  } catch(err) {
    yield put(getPokemonDetailFailure(err));
  }
};


function getData(payload) {
  const cookies = new Cookies();
  const cookiesData = cookies.get(COOKIES_DETAIL+payload);
  if (typeof cookiesData !== "undefined" && typeof cookiesData.id !== "undefined") {
    console.log(cookiesData)
      return cookiesData;     
  } else {
    return getPokemonDetails(payload);
  }
}