import { takeEvery, put, call } from 'redux-saga/effects';

import useListApi from '../api/userListAPI';

//watcher function
export function* userListSaga() {
  yield takeEvery('getUserListFromAPI', getUserListFromAPI);
  yield takeEvery('removeUser', removeUser);
}
//worker function
//get user list data from API
function* getUserListFromAPI({ pageNumber }) {
  yield put({
    type: 'FETCH_USER_REQUEST',
  });
  try {
    const response = yield call(useListApi.get, `?page=${pageNumber}`);
    yield put({
      type: 'FETCH_USER_SUCCESS',
      payload: {
        userListData: response.data,
      },
    });
  } catch (err) {
    yield put({
      type: 'FETCH_USER_FAILED',
      payload: err.message,
    });
  }
}
//Remove User from userlist
function* removeUser({ id }) {
  try {
    yield call(useListApi.delete, `/${id}`);
    yield put({
      type: 'REMOVE_EMPLOYEE',
      payload: id,
    });
  } catch (err) {
    yield put({
      type: 'FETCH_USER_FAILED',
      payload: err.message,
    });
  }
}
