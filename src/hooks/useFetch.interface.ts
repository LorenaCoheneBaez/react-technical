export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  detail: {
    info: string;
    price: number;
    address: string;
  };
  category: string;
}
