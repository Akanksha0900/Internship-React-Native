import { createContext, useReducer } from "react";
import { favoriteReducer } from "../globalstate/Favorite.reducer";
const initialState = {
  favorites: [], //update from favorite.reducer
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
