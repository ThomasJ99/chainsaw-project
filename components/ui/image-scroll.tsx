"use client";

import { ProductCardProps } from "@/types/products";
import { useState } from "react";

export default function ImageScroll({ product }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // product now contains our currentIndex
  product.images[currentIndex];

  // We handle currentIndex here and swap it depending
  const indexSwap = () => {
    // Updates our state
    setCurrentIndex((prevIndex) =>
      // Checks if we are on the last image, if true 0, false - index + 1 to
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Failcheck
  if (!product.images?.length) return null;

  return (
    <div>
      <img
        src={product.images[currentIndex]}
        alt={`A product called ${product.title}`}
        className="w-full h-120 object-cover"
        height={400}
        width={200}
      />

      <button
        type="button"
        onClick={indexSwap}
        className="absolute top-50 right-0 bg-white/90 hover:bg-gray-300 active:bg-gray-200
          text-black text-3xl cursor-pointer px-2.5 py-1 
          group invisible group-hover:visible transition-all duration-200 ease-in"
      >
        {">"}
      </button>
    </div>
  );
}

// Code for a slideshow - replace current img
{
  /* <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.title}
            className="w-full h-120 object-cover shrink-0"
          />
        ))}
      </div> */
}
