import { Products } from "@/types/products";

// This is where we get the product information
async function getProducts(): Promise<Products[]> {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      throw new Error("Error, could'nt find products");
    }
    const data = await response.json();
  } catch (error) {
    return error;
  }
}

// Component
// This is where we call getProducts and render out the products
