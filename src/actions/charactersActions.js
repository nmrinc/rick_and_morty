import { GET_CHARACTERS, GET_MORE_CHARACTERS, UPDATE_CHARACTER, REMOVE_CHARACTER } from '../types/charactersTypes';
import axios from 'axios';
import globals from '../configs/globals';

export const get_characters = () => async (dispatch) => {
  dispatch({ type: `${GET_CHARACTERS}_PENDING` });

  try {
    const response = await axios.get(`${globals.api_url}/character`);

    dispatch({ type: `${GET_CHARACTERS}_FULFILLED`, payload: response.data });
  } catch (e) {
    dispatch({
      type: `${GET_CHARACTERS}_REJECTED`, payload: e.message
    });
  }
}

export const get_more_characters = () => async (dispatch, getState) => {
  dispatch({ type: `${GET_CHARACTERS}_PENDING` });

  let { results, page } = getState().charactersReducer;

  try {
    const response = await axios.get(`${globals.api_url}/character/?page=${page}`);

    const updated = [...results, ...response.data.results];

    dispatch({ type: `${GET_MORE_CHARACTERS}_FULFILLED`, payload: updated });
  } catch (e) {
    dispatch({
      type: `${GET_CHARACTERS}_REJECTED`, payload: e.message
    });
  }

}

export const update_character = (updated) => async (dispatch, getState) => {
  dispatch({ type: `${UPDATE_CHARACTER}_PENDING` });

  let { results } = getState().charactersReducer;
  let index = results.indexOf(results.find(item => item.id === updated.id));
  let results_updated = [...results];
  results_updated[index] = updated;

  dispatch({ type: `${UPDATE_CHARACTER}_FULFILLED`, payload: results_updated });
}

export const delete_character = (index) => async (dispatch) => {
  dispatch({ type: `${REMOVE_CHARACTER}_PENDING` });

  console.log('====================================');
  console.log(index);
  console.log('====================================');
}