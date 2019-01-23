import { all, takeEvery, fork } from 'redux-saga/effects';

// Container sagas
import listSaga from '@Containers/pokemon-list/store/sagas';
import detailSaga from '@Containers/pokemon-detail/store/sagas';

export default function* root() {
  yield all([
    fork(listSaga),
    fork(detailSaga)
  ]);
};
