import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUserFriends = userId => dispatch => (
  ApiUtil.fetchUserFriends(userId).then(res => dispatch(receiveUsers(res)))
);

export const fetchUserByUrl = userUrl => dispatch => (
  ApiUtil.findUserByUrl(userUrl).then(res => dispatch(receiveUser(res)))
);
