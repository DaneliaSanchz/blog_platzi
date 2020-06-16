import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: GET_ALL,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Opps... Something bad happened, please try later :(',
    });
  }
};
