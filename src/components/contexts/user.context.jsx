// import { createContext, useState, useEffect, useReducer } from 'react';
// import createAction from './../../utils/reducer/reducer.utils';
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from './../../utils/firebase/firebase.utils';
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER',
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in user reducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   //const [currentUser, setCurrentUser] = useState(null);
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const { currentUser } = state;

//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   const value = { currentUser, setCurrentUser };
  
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
