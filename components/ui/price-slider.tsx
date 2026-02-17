"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// -- What is my sliders role before I start implementing it? -- //

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

  const priceChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const newMin = event.target.value;

    // TODO: Implement logic here...
    // Clones my current URL so i dont lose it later later on if I have categories selected already
    const params = new URLSearchParams(searchParams.toString());
    params.set("price_min", newMin);
    setMin(Number(newMin));

    router.push(`${pathName}?${params.toString()}`);
  },300);

  return (
    <div>
      <span className="border-2 p- mx-2">{min}</span>
      <label htmlFor="slider">Price Slider</label>
      <input
        onChange={priceChange}
        type="range"
        id="slider"
        name="price_min"
        min={0}
        max={100000}
        step={100}
      />
      {/* TODO: JSX LOGIC HERE...  */}
    </div>
  );
}
