import React from "react";
import data from "./data/data";
import ItemCard from "@/components/item-card";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to Efa Galleries!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <ItemCard key={item.id} name={item.name} img={item.img} />
        ))}
      </div>
    </main>
  );
}
