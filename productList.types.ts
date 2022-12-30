export interface Product {
  node: Node;
}

export interface Node {
  id: string;
  title: string;
  handle: string;
  priceRange: PriceRange;
  images: Images;
}

export interface PriceRange {
  minVariantPrice: MinVariantPrice;
  maxVariantPrice: MaxVariantPrice;
}

export interface MinVariantPrice {
  amount: string;
}

export interface MaxVariantPrice {
  amount: string;
}

export interface Images {
  edges: Edge[];
}

export interface Edge {
  node: Node2;
}

export interface Node2 {
  url: string;
  altText: string;
}
