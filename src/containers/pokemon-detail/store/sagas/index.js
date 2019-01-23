import { put } from 'redux-saga/effects';
import { getPokemonDetails } from '@Services/pokemon';
import {
  getPokemonDetailSuccess,
  getPokemonDetailFailure,
} from '../actions';
import Cookies from 'universal-cookie';
import { COOKIES_DETAIL } from '@Utils/utils';

export function* getDetail({payload}) {
  try {
    const response = yield getData(payload);
    if (typeof response !== "undefined" && typeof response.id !== "undefined") {
      const cookies = new Cookies();
      cookies.set(COOKIES_DETAIL+payload, response, {path: '/', expires: getNewTime(60*24)});
      yield put(getPokemonDetailSuccess(response));
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
      return cookiesData;     
  } else {
    return getPokemonDetails(payload);
  }
}