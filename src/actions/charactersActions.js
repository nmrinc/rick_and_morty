import { GET_CHARACTERS, GET_MORE_CHARACTERS, UPDATE_CHARACTER, KILL_CHARACTER, CREATE_CHARACTER } from '../types/charactersTypes';
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

export const kill_character = (id) => async (dispatch, getState) => {
  dispatch({ type: `${KILL_CHARACTER}_PENDING` });

  let { results } = getState().charactersReducer;
  let index = results.indexOf(results.find(item => item.id === id));
  let results_updated = [...results];
  results_updated.splice(index, 1);

  dispatch({ type: `${KILL_CHARACTER}_FULFILLED`, payload: results_updated });
}

export const create_character = (item) => async (dispatch, getState) => {
  dispatch({ type: `${CREATE_CHARACTER}_PENDING` });

  if (item.image === '') { item.image = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'; }

  item.location = { name: item.location };
  item.origin = { name: item.origin };

  let { results } = getState().charactersReducer;
  let results_updated = [item, ...results];

  dispatch({ type: `${CREATE_CHARACTER}_FULFILLED`, payload: results_updated });
}