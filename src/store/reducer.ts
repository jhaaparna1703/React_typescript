import * as actionTypes from "./actionTypes";

const initialState: ProductState = {
  products: [],
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductsAction
): ProductState => {
  switch (action.type) {
    case actionTypes.SHOW_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
  }

  return state;
};

export default productReducer;
