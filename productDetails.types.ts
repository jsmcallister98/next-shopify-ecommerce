export interface ProductDetails {
  collections: Collections;
  id: string;
  title: string;
  handle: string;
  description: string;
  images: Images2;
  options: Option[];
  variants: Variants;
}

export interface Collections {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  products: Products;
}

export interface Products {
  edges: Edge2[];
}

export interface Edge2 {
  node: Node2;
}

export interface Node2 {
  priceRange: PriceRange;
  handle: string;
  title: string;
  id: string;
  images: Images;
}

export interface PriceRange {
  minVariantPrice: MinVariantPrice;
}

export interface MinVariantPrice {
  amount: string;
}

export interface Images {
  edges: Edge3[];
}

export interface Edge3 {
  node: Node3;
}

export interface Node3 {
  url: string;
  altText: string;
}

export interface Images2 {
  edges: Edge4[];
}

export interface Edge4 {
  node: Node4;
}

export interface Node4 {
  url: string;
  altText: string;
}

export interface Option {
  name: string;
  values: string[];
  id: string;
}

export interface Variants {
  edges: Edge5[];
}

export interface Edge5 {
  node: Node5;
}

export interface Node5 {
  selectedOptions: SelectedOption[];
  image: Image;
  title: string;
  id: string;
  priceV2: PriceV2;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface Image {
  url: string;
  altText: string;
}

export interface PriceV2 {
  amount: string;
}
