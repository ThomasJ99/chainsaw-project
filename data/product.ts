import { Product } from "@/types/products";

const URL_API = "https://api.escuelajs.co/api/v1/";

// This is where we get the product information
export async function getProducts(): Promise<Product[]> {
  try {
    const data = await fetch(`${URL_API}products`);

    return await data.json();

    // Another fail check if using try/catch, both is probably a bit much, so either remove the if statement or this one
  } catch (error) {
    // Different ways to show error
    throw new Error("Api not working...");
    // ("Api not working...");
    // redirect("/uykkp99uy")
  }
}

// This file fetches data from a API and then exports that data or a error message
export async function getProduct(id: number): Promise<Product> {
  // Depending on how we want to use this file we could tweak what/who has access to it by returning null

  // Gets our api
  const response = await fetch(`${URL_API}products/${id}`, {
    // Caches files and redoes it every 1 hour
    // next: { revalidate: 3600 },
  });

  return await response.json();

  // const data = await response.json() as Product[];

  // return data;
}

// // This file fetches data from a API and then exports that data or a error message
// export async function getProduct(): Promise<Product[] | { message: string }> {
//   // Depending on how we want to use this file we could tweak what/who has access to it by returning null

//   // Gets our api
//   const response = await fetch("https://api.escuelajs.co/api/v1/products", {
//     // Caches files and redoes it every 1 hour
//     next: { revalidate: 3600 },
//   });

//   // Fail check
//   if (!response.ok)
//     return {
//       message: "There was an error",
//     };

//   return (await response.json()) as Product[];
// }

// Another way to write the line above
//   const data = (await response.json()) as Product[];
//   return data;

// export async function getProduct() {
//   // Depending on how we want to use this file we can tweak what has access to it
//   //auth
//   //if (!admin) return null
//   // Gets our api
//   const response = await fetch("https://api.escuelajs.co/api/v1/products", {
//     // Caches files and redoes it every 1 hour
//     next: { revalidate: 3600 },
//   });

//   // Fail check
//   if (!response.ok) return { message: "There was an error" };

//   // return await response.json();
//   const data = (await response.json()) as Product[];

//   return data;
// }
