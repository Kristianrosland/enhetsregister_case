import constants from '../actions/constants';

const initialState = {
  isFetching: false,
  organizations: [],
}
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case constants.FETCH_ORGANIZATIONS:
      return {
          ...state,
          isFetching: true,
      };

    case constants.FETCH_SUCCESS:
      return {
          ...state,
          isFetching: false,
          organizations: action.organizations,
      };

    case constants.FETCH_FAIL:
      return {
          ...state,
          organizations: [],
          isFetching: false,
      };

    case constants.CLEAR_ORGANIZATIONS:
      return {
          ...state,
          organizations: [],
          isFetching: false,
      };

    default:
      return state;
  }
}
