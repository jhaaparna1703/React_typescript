interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}

type ProductState = {
  products: IProduct[];
};

interface ICartProduct extends IProduct {
  quantity: number;
}

type CartState = {
  map(arg0: (product: any) => any): React.ReactNode;
  cartProducts: ICartProduct[];
  totalAmount: number
};

type ProductsAction = {
  type: string;
  products: IProduct[];
};

type CartsAction = {
  payload: number;
  type: string;
  product: ICartProduct;
};

interface StoreState {
  products: IProduct[];
  cartProducts: ICartProduct[];
}

type DispatchType = (args: ProductsAction) => ProductsAction;
type CartDispatchType = (args: CartsAction) => CartsAction;
