import { Category } from './category';

export class Product {
  category = Category;
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number;
  stock: boolean;
  created: string;
  updates: string;
}
