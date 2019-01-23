import { put } from 'redux-saga/effects';
import { COOKIES_LIST } from '@Utils/utils';
import { getPokemonList } from '@Services/pokemon';
import {
  getPokemonListSuccess,
  getPokemonListFailure,
} from '../actions';
import Cookies from 'universal-cookie';

export function* getList({payload}) {
  try {
    const response = yield getData(payload);
    if (typeof response !== "undefined" && typeof response.results !== "undefined") {
      yield put(getPokemonListSuccess(response.results));
    } else {
      yield put(getListFailure({}));
    }
  } catch(err) {
    yield put(getPokemonListFailure(err));
  }
};

function getData(payload) {
  const cookies = new Cookies();
  const cachedList = cookies.get(COOKIES_LIST+payload);
  if (typeof cachedList !== "undefined" && cachedList.length >= 0) {
    return { results: cachedList }; 
  } else {
    return getPokemonList(payload);
  }
}