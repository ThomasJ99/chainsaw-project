import { Product } from "@/types/products";

export async function getProduct() {
    // Depending on how we want to use this file we can tweak what has access to it
  //auth
  //if (!admin) return null
  // Gets our api
  const response = await fetch("https://api.escuelajs.co/api/v1/products", {
    // Caches files and redoes it every 1 hour
    next: { revalidate: 3600 },
  });

  // Fail check
  if (!response.ok) return {message: "There was an error"}
    
  
  // return await response.json();
  const data = (await response.json()) as Product[];

  return data;
}
