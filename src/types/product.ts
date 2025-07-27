export interface Variant {
  color: string;
  hex: string;
  image: string;
  secondaryImage: string;
}

export interface Product {
  brand: string;
  title: string;
  originalPrice: number;
  salePrice: number;
  variants: Variant[];
}

export interface ProductCardProps {
  product: Product;
  onVariantChange?: (variant: Variant) => void;
}

export interface SaleBadgeProps {
  show: boolean;
}

export interface ColorSelectorProps {
  variants: Variant[];
  selectedVariant: Variant;
  onSelect: (variant: Variant) => void;
}

export interface ProductInfoProps {
  brand: string;
  title: string;
  originalPrice: number;
  salePrice: number;
  isOnSale: boolean;
}
