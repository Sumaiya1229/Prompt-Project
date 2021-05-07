export const login = (payload) => {
  return { type: "LOGIN", payload };
};
export const clientSignupAction = (payload) => {
  return { type: "CLIENT_SIGNUP", payload };
};
export const time = (payload) => {
  return { type: "TIME_ALLOC", payload };
};
export const clientTime = (payload) => {
  return { type: "CLIENT_TIME_ALLOC", payload };
};
export const popTime = (payload) => {
  return { type: "POP_TIME", payload };
};
export const clientPopTime = (payload) => {
  return { type: "CLIENT_POP_TIME", payload };
};
export const promo = (payload) => {
  return { type: "ADD_PROMO", payload };
};
export const licensed = (payload) => {
  return { type: "LICENSE_TYPE", payload };
};
