import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import dynamic from "next/dynamic";
import lodash from "lodash";

//import { AddProductToWishList } from "./AddProductToWishlist";
const AddProductToWishList = dynamic<AddProductToWishlistProps>(() => {
  return import("./AddProductToWishlist").then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>Carregando...</span>
})


interface ProductItemProps {
 product: {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
 }
 onAddToWishlist: (id: number) => void;
}

export function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
 const [isAddingToWishlist, setIsAddigToWishlist] = useState(false);
 
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddigToWishlist(true)}>Adicionar aos favoritos  </button>

     {isAddingToWishlist && (
       <AddProductToWishList 
        onAddToWishlist={() => onAddToWishlist(product.id)} 
        onRequestClose={() => setIsAddigToWishlist(false)}
       />
     )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
})