import axios from 'axios';
import { GET_PER_USER, LOADING, ERROR } from '../types/publicationsTypes';
import * as usersTypes from '../types/usersTypes';

const { GET_ALL: USERS_GET_ALL } = usersTypes;

export const getPerUser = (key) => async (dispatch, getState) => {
  const { users } = getState().usersReducer;
  const { publications } = getState().publicationsReducer;
  const user_id = users[key].id;

  const result = await axios.get(
    `http://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  const updated_publications = [...publications, result.data];

  const publications_key = updated_publications.length - 1;
  const updated_users = [...users];
  updated_users[key] = {
    ...users[key],
    publications_key,
  };

  dispatch({
    type: USERS_GET_ALL,
    payload: updated_users,
  });

  dispatch({
    type: GET_PER_USER,
    payload: updated_publications,
  });
};
