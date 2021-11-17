import { put, takeEvery } from '@redux-saga/core/effects';
import { login, login_success } from './reducer';

function* loginSaga({ payload }) {
  try {
    console.log(payload);
    yield put({
      type: login_success.type,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
}

function* authSagas() {
  yield takeEvery(login.type, loginSaga);
}

export default authSagas;
