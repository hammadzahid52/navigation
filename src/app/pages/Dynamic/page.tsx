import Link from "next/link";
import React from "react";
import Card from "@/Components/Card";
interface Product {
    id: string;
    title: string;
    price: number;
}

async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price');
    const data = await res.json();
    return data.products;
}

export default async function() {
    const products = await getProducts();
    console.log({ products });
  return (
    <div className="h-screen mt-28 ml-10 md:ml-10">
      <div className="flex gap-10 flex-wrap">
            {products.map(({ id, title, price }: Product) => (
                <Card key={id} id={id} title={title} price={price} />
            ))}    
      </div>
    </div>
  );
}

