import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from "./filter-actions";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      return [...state, action.payload]
    }
    case REMOVE_FILTER: {
      return state.filter(item => item  !== action.payload);
    }
    case CLEAR_FILTER: {
      return [];
    }
    default: {
      return state;
    }
  }
}
