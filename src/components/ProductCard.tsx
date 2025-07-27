import { useState } from "react";
import type {
  Variant,
  ProductCardProps,
  SaleBadgeProps,
  ColorSelectorProps,
  ProductInfoProps,
} from "../types/product";
import { STYLES } from "../styles/productCard";

const SaleBadge = ({ show }: SaleBadgeProps) => {
  if (!show) return null;

  return (
    <span
      className="absolute top-[10px] left-[10px] z-10 rounded-[25.61px] border border-[#FF0000] px-[12.8px] py-[3.2px] text-[15.37px] font-medium text-[#FF0000] bg-white font-['Franklin_Gothic_ATF']"
      aria-label="This product is on sale"
    >
      On Sale!
    </span>
  );
};

const ColorSelector = ({
  variants,
  selectedVariant,
  onSelect,
}: ColorSelectorProps) => {
  return (
    <div
      className={`${STYLES.spacing.sectionGap} flex items-center ${STYLES.spacing.elementGap}`}
    >
      {variants.map((variant) => (
        <button
          key={variant.color}
          onClick={() => onSelect(variant)}
          className={`h-[20px] w-[20px] rounded-full transition outline-none border-0 cursor-pointer
            ${
              selectedVariant.color === variant.color
                ? "ring-2 ring-[#0A4874] ring-offset-1"
                : ""
            }`}
          style={{ backgroundColor: variant.hex }}
          aria-label={`Select color ${variant.color}`}
          aria-pressed={selectedVariant.color === variant.color}
        />
      ))}
    </div>
  );
};

const ProductInfo = ({
  brand,
  title,
  originalPrice,
  salePrice,
  isOnSale,
}: ProductInfoProps) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className={`${STYLES.spacing.sectionGap} text-left space-y-[8px]`}>
      <p className={STYLES.text.brand}>{brand}</p>
      <p className={STYLES.text.title}>{title}</p>
      <div className={`flex ${STYLES.spacing.elementGap}`}>
        {isOnSale && (
          <span className={`${STYLES.text.price} line-through`}>
            {formatPrice(originalPrice)}
          </span>
        )}
        <span className={STYLES.text.salePrice}>{formatPrice(salePrice)}</span>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, onVariantChange }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[0]
  );
  const [hovered, setHovered] = useState(false);

  const isOnSale = product.salePrice < product.originalPrice;

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    if (onVariantChange) {
      onVariantChange(variant);
    }
  };

  return (
    <article className="w-[315px] bg-white p-6">
      <div
        className="relative rounded-[16px] border border-[#E8E8E8] overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SaleBadge show={isOnSale} />

        <img
          src={hovered ? selectedVariant.secondaryImage : selectedVariant.image}
          alt={`${product.title} in ${selectedVariant.color}`}
          className="mx-auto h-[275px] w-full object-contain p-4"
        />
      </div>

      <ColorSelector
        variants={product.variants}
        selectedVariant={selectedVariant}
        onSelect={handleVariantChange}
      />

      <ProductInfo
        brand={product.brand}
        title={product.title}
        originalPrice={product.originalPrice}
        salePrice={product.salePrice}
        isOnSale={isOnSale}
      />
    </article>
  );
};
