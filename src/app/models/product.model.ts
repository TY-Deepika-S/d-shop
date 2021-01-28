import { ProductService } from "../services/product.service";

export interface Products{
  _id: string;
  productName: string;
  productPrice: number;
  productImageURL: string;
  productDescription: string;
}
