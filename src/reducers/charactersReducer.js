import { GET_CHARACTERS } from '../types/charactersTypes';

const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null
}

const charactersReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case `${GET_CHARACTERS}_PENDING`:
      return {
        ...state,
        isLoading: true,
      }

    case `${GET_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }

    case `${GET_CHARACTERS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default charactersReducer;