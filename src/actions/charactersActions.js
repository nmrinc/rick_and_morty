import { GET_CHARACTERS } from '../types/charactersTypes';
import axios from 'axios';
import globals from '../configs/globals';

export const get_characters = () => async (dispatch, getState) => {
  dispatch({ type: `${GET_CHARACTERS}_PENDING` });

  try {
    const response = await axios.get(`${globals.api_url}/character`);

    dispatch({ type: `${GET_CHARACTERS}_FULFILLED`, payload: response.data });
  } catch (e) {
    dispatch({
      type: `${GET_CHARACTERS}_REJECTED`, payload: `There was an error:
    ${e.message}`
    });
  }
}
