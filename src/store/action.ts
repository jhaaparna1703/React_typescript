import * as actionTypes from "./actionTypes";

export const showProducts = (products: IProduct[]) => {
  const action: ProductsAction = {
    type: actionTypes.SHOW_PRODUCTS,
    products,
  };
  return action;
};

export const addToCart = (product: ICartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product,
  };
};
export const removeFromCart = (id: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};
export const subtractQuantity = (id: number) => {
  return {
    type: actionTypes.SUB_QUANTITY,
    payload: id,
  };
};
export const addQuantity = (id: number) => {
  return {
    type: actionTypes.ADD_QUANTITY,
    payload: id,
  };
};
export const totalAmount = () => {
  return {
    type: actionTypes.TOTAL_AMOUNT,
  };
};
