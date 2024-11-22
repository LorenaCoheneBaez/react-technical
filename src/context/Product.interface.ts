import { Product } from "../hooks/useFetch.interface";

export interface ProductContextType {
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductProviderProps {
  children: React.ReactNode;
}
