import React, { useReducer, createContext, useContext } from "react";

const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  switch (action.type) {
    case "ADD_ITEM":
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;

        return {
          ...state,
          items: updatedItems,
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.quantity,
        };
      }
    case "REMOVE_ITEM":
      if (existingItemIndex !== -1) {
        const updatedItems = state.items.filter(
          (item, index) => index !== existingItemIndex
        );

        return {
          ...state,
          items: updatedItems,
          totalAmount:
            state.totalAmount - action.payload.price * action.payload.quantity,
        };
      }

      return state; // If item not found, return the current state

    default:
      return state;
  }
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartState({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItemFromCart = (itemId) => {
    dispatchCartState({
      type: "REMOVE_ITEM",
      payload: { id: itemId },
    });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
