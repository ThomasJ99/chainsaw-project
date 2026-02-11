import CardGrid from "@/components/ui/card-grid";
import { Suspense } from "react";
import { getProducts } from "@/data/product";
import ProductCard from "@/components/ui/product-card";
import LoadingSpinner from "@/components/ui/loading-spinner";
import CategoryLinks from "@/components/ui/category-links";
import { ensureString } from "@/util";
import LimitSelect from "@/components/ui/limit-select";

// Component
// This is where we call getProducts and render out the products
export default async function productPage(params: PageProps<"/">) {
  const { limit = "8", offset = "0", category } = await params.searchParams;
  const limitNumber = Number(ensureString(limit));
  const offsetNumber = Number(ensureString(offset));
  const categoryString = ensureString(category);
  // Things to do with limit, implement links/buttons that change the limit on the site

  const products = await getProducts(limitNumber, offsetNumber, categoryString);

  return (
    <section className="">
        <LimitSelect/>
      <Suspense fallback={<LoadingSpinner />}>
        <CategoryLinks />
      </Suspense>
      <ul className="">
        {/* Shows the fallback if the grid and api take a lot of time to load - can
        show skeleton ui here TODO: Implement our getProducts() into CardGrid
        and put suspense around it */}
        {/* Dont do this  */}
        {/* <CardGrid children={elements} /> */}
        <CardGrid>
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </CardGrid>
      </ul>
    </section>
  );
}
