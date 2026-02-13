"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// What is my sliders role before I start implementing it?
// My getProducts holds the min/max price, so its job should be to render correctly in the URL by making sure the URL is correct
// My slider should then have some hook for interactivity and update the url params on submit button
// Perhaps ill have two sliders which each determine min/max with a input field which shows the current value for each slider

export default function PriceSlider() {
  // States with a current value and a function which updates it
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  // Reads the searchParams - URL
  const searchParams = useSearchParams();

  // I need the current path to rebuild the URL correctly
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  const minURL = Number(searchParams.get("price_min") || 0);
  const maxURL = Number(searchParams.get("price_max") || 100000);

  const priceChange = () => {
    // TODO: Implement logic here...
  };
}
