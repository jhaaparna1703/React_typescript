import * as actionTypes from "./actionTypes";
import data from "../data.json";
import * as action from "./action";

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
      };
  }

  return state;
};

export default productReducer;

// const ShoppingReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_TO_CART:
//       return {
//         ...state,
//         data: state.data.map(data =>
//           data.id === action.id ? {...data, selected: true} : data,
//         ),
//       };
//     case actionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         data: state.data.map(data =>
//           data.id === action.id
//             ? {...data, selected: false, quantity: 1}
//             : data,
//         ),
//       };
//       case actionTypes.REMOVE_FROM_CART:
//     return [
//       ...state.filter(data => data.id !== action.payload.id),
//     ]
// }

//     case actionTypes.ADD_QUANTITY:
//       return {
//         ...state,
//         data: state.data.map(data =>
//         data.id === action.id
//             ? {...data, quantity: data.quantity + 1}
//             : data,
//         ),
//       };
//     case actionTypes.SUB_QUANTITY:
//       return {
//         ...state,
//         data: state.data.map(data=>
//           data.id === action.id
//             ? {
//                 ...data,
//                 quantity: data.quantity !== 1 ? data.quantity - 1 : 1,
//               }
//             : data,
//         ),
//       };
//     case actionTypes.EMPTY_CART:
//       return {
//         ...state,
//         data: state.data.map(data =>
//           data.selected
//             ? {...data, selected: false, quantity: 1}
//             : data,
//         ),
//       };
//     default:
//       return state;
//   }
// };
// export {ShoppingReducer};
