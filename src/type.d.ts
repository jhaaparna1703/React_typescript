interface IProduct{
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
}

type ProductState = {
    products: IProduct[]
    
  }
  
  type ProductsAction = {
    type: string
    products: IProduct[]
  }
  
  type DispatchType = (args: ProductsAction) => ProductsAction