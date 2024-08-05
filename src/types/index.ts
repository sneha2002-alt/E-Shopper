export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface IProductCollection {
  jackets: IProduct[];
  sportswear: IProduct[];
  shoes: IProduct[];
  accessories: IProduct[];
  makeup: IProduct[];
}
