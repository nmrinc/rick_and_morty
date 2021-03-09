import { GET_CHARACTERS, GET_MORE_CHARACTERS, UPDATE_CHARACTER } from '../types/charactersTypes';

const INITIAL_STATE = {
  isLoading: false,
  info: null,
  results: null,
  page: 1,
  error: null
}

const charactersReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case `${UPDATE_CHARACTER}_PENDING`:
    case `${GET_CHARACTERS}_PENDING`:
      return {
        ...state,
        isLoading: true,
      }

    case `${GET_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        info: action.payload.info,
        results: action.payload.results,
      }

    case `${GET_CHARACTERS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case `${GET_MORE_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
        page: state.page + 1,
      }

    case `${UPDATE_CHARACTER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      }

    default:
      return state;
  }
}

export default charactersReducer;