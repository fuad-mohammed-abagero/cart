import { createContext, useReducer } from "react";

const initialCart = {
  cart: [],
  isCompleted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return { cart: [...state.cart, action.payload] };

    case "cart/complete":
      return { ...state, isCompleted: true };

    case "cart/reset":
      return { cart: [], isCompleted: false };

    case "cart/deleteItem": {
      const updatedCart = state.cart.filter(
        (item) => item.name !== action.payload
      );
      return { ...state, cart: updatedCart };
    }
    case "cart/increment": {
      const updatedCart = state.cart.map((item) =>
        item.name === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "cart/decrement": {
      const updatedCart = state.cart
        .map((item) =>
          item.name === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cart: updatedCart,
      };
    }
  }
}

export const CartContext = createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export function addCart(newCart) {
  return { type: "cart/add", payload: newCart };
}
export function decQuantityCart(name) {
  return { type: "cart/decrement", payload: name };
}
export function incQuantityCart(name) {
  return { type: "cart/increment", payload: name };
}
export function resetCart() {
  return { type: "cart/reset" };
}
export function completeCart() {
  return { type: "cart/complete" };
}
export function deleteItemFromCart(name) {
  return { type: "cart/deleteItem", payload: name };
}
export default ContextProvider;
