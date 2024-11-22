export interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
  detail: { info: string; price: number; address: string };
  category: string;
}

export interface CardProps {
  item: Item;
}
