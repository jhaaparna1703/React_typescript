import { ReactNode } from "react";
import * as actionTypes from "./actionTypes";

const initialState: CartState = {
  cartProducts: [],
  totalAmount: 0,
  map: function (arg0: (product: any) => any): ReactNode {
    throw new Error("Function not implemented.");
  },
};

const CartReducer = (
  state: CartState = initialState,
  action: CartsAction
): CartState => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // console.log(action.product, "ffff");

      const index = state.cartProducts.findIndex(
        (d) => d.id === action.product.id
      );
      if (index === -1) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.product],
        };
      } else {
        let tempArr = [...state.cartProducts];

        tempArr[index].quantity += 1;

        return {
          ...state,
          cartProducts: tempArr,
        };
      }
    case actionTypes.REMOVE_FROM_CART: {
      // console.log(action.payload, "action");
      const newCartProducts = state.cartProducts.filter(
        (cartItems) => cartItems.id !== action.payload
      );

      // console.log(newCartProducts, "newCartProducts");
      return {
        ...state,
        cartProducts: newCartProducts,
      };
    }

    case actionTypes.ADD_QUANTITY: {
      let tempCart = state.cartProducts.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      return {
        ...state,
        cartProducts: tempCart,
      };
    }

    case actionTypes.SUB_QUANTITY: {
      let tempCart = state.cartProducts
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity !== 0);

      return {
        ...state,
        cartProducts: tempCart,
      };
    }
  }

  return state;
};

export default CartReducer;
