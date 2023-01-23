import * as actionTypes from "./actionTypes";

export const showProducts=(products:IProduct[])  =>{
  const action: ProductsAction = {
    type: actionTypes.SHOW_PRODUCTS,
    products,
  }
  return action
}
export const addToCart = (id:number) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
  };
};
export const removeFromCart = (id:number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id,
  };
};
export const subtractQuantity = (id:number) => {
  return {
    type: actionTypes.SUB_QUANTITY,
    id,
  };
};
export const addQuantity = (id:number) => {
  return {
    type: actionTypes.ADD_QUANTITY,
    id,
  };
};
export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};
