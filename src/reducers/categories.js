import { RECEIVE_CATEGORIES } from '../actions/index';

const initialState = {
  list: []
};

function categories(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      console.log(action.categories);
      return {
        ...state,
        list: action.categories
      };
    default:
      return state;
  }
}

export default categories;
