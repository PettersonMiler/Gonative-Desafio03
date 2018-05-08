export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  SHOW_MODAL: 'user/SHOW_MODAL',
};

const initialState = {
  data: [],
  loading: false,
  errorOnAdd: null,
  region: {},
  showModal: false,
  inputUser: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        region: action.payload.place,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [
          ...state.data,
          {
            user: action.payload.user,
            coordinate: state.region,
          },
        ],
        errorOnAdd: null,
        loading: false,
        showModal: false,
        inputUser: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
        showModal: true,
      };
    case Types.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload.modal,
        errorOnAdd: null,
        inputUser: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (userInfo, place) => ({
    type: Types.ADD_REQUEST,
    payload: {
      userInfo,
      place,
    },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: {
      user,
    },
  }),

  addUserError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),

  addShowModal: modal => ({
    type: Types.SHOW_MODAL,
    payload: {
      modal,
    },
  }),
};
