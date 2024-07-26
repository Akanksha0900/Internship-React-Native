// Action.payload : it is an optional property that carries additional data, like item id, which are needed by the reducer to update the state
// Action.type: string that determines the function getting performed

export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload], //adds new element to the favorites array from userContext.js
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload), //removes the current element from the favorites array whose id is equal to item id
      };

    default:
      return state;
  }
};
