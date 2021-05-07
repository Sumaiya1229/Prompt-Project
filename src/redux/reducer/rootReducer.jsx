const initState = {
  clientSignup: {
    username: "",
    fullname: "",
    zip: "",
    phone: "",
    country: "",
    email: "",
    password: "",
  },
  loggedIn: 0,
  login: { code: 0, email: "", password: "", remember: false },
  spHome: {
    time: [],
    promo: [],
    licensed: false,
  },
  clientHome: { time: ["06:00AM-45", "06:00AM-15"] },
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "CLIENT_SIGNUP":
      return {
        ...state,
        clientSignup: action.payload,
      };
    case "TIME_ALLOC":
      return {
        ...state,
        spHome: { time: [...state.spHome.time, action.payload] },
      };
    case "CLIENT_TIME_ALLOC":
      return {
        ...state,
        clientHome: { time: [...state.clientHome.time, action.payload] },
      };
    case "POP_TIME":
      return { ...state, spHome: { time: action.payload } };
    case "CLIENT_POP_TIME":
      return { ...state, clientHome: { time: action.payload } };
    case "ADD_PROMO":
      return {
        ...state,
        spHome: { promo: [...state.spHome.promo, action.payload] },
      };
    case "LICENSE_TYPE":
      return {
        ...state,
        spHome: { ...state.spHome, licensed: action.payload },
      };
    default:
      return state;
  }
};
export default rootReducer;
