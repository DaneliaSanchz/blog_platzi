import axios from 'axios';
import { GET_ALL, CARGANDO, ERROR } from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
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
      payload: 'Opps... Something bad happened, please tyr later :(',
    });
  }
};
