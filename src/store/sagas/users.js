import { call, put } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as UsersActions } from 'store/ducks/users';

export function* addUserRequest(action) {
  try {
    const response = yield call(api.get, `${action.payload.userInfo}`);

    yield put(UsersActions.addUserSuccess(response.data));
  } catch (err) {
    yield put(UsersActions.addUserError('Usuário não encontrado'));
  }
}
