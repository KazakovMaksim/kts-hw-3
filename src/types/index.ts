export type CategoryItem = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type ProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: CategoryItem;
};
