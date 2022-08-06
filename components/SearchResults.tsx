import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  retults: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({results}) {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product}/>
        );
      })}
    </div>
  )
}