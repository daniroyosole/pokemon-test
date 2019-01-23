import { all, takeEvery } from 'redux-saga/effects';

// Container sagas
import { getList } from '@Containers/pokemon-list/store/sagas';
import { getDetail } from '@Containers/pokemon-detail/store/sagas';

import { GET_LIST_REQUEST } from '@Containers/pokemon-list/store/actions/actionTypes';
import { GET_DETAIL_REQUEST } from '@Containers/pokemon-detail/store/actions/actionTypes';

export default function* root() {
  yield all([
    takeEvery(GET_LIST_REQUEST, getList),
    takeEvery(GET_DETAIL_REQUEST, getDetail)
  ]);
};
