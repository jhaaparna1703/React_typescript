import { combineReducers } from "redux";
import CartReducer from "./cartReducer";
import productReducer from "./reducer";

const rootReducer = combineReducers({
  products: productReducer,
  cartProducts: CartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
