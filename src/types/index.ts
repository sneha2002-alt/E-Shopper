import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: StaticImageData;
}

export interface IProductCollection {
  jackets: IProduct[];
  sportswear: IProduct[];
  shoes: IProduct[];
  accessories: IProduct[];
  makeup: IProduct[];
  dresses: IProduct[];
  shirts: IProduct[];
  tshirts: IProduct[];
  swimwear: IProduct[];
  jeans: IProduct[];
}
