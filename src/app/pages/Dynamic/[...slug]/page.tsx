import React from "react";
import NewCard from "@/Components/newCard";

interface Product {
  id: string;
  title: string;
  price: number;
}
async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&select=id,title,price`
  );
  const data = await res.json();
  return data.products;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const products = await getProducts();
  const p_id = params.slug;
  const s_id = parseInt(p_id);
  console.log(s_id);
  
  console.log(products);
  const product = products[s_id - 1]
  console.log(product);
  // const product = products[0];

  return (
    <div>
      <NewCard key={product.id} id={product.id} title={product.title} price={product.price} />
    </div>
  );
}
