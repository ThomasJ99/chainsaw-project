"use client";

import { ITEMLIMITS } from "@/data/constants";
import { useSearchParams, useRouter } from "next/navigation";


export default function LimitSelect() {
  const searchParams = useSearchParams();
  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  // This function handles our change when we use the dropdown and select a new "value"
  // Choose a select element here because we use it in our select tag
  // We declare a parameter called event which we then look into our selects value to determine the limit
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;
    console.log(newLimit);
    router.push(`?limit=${newLimit}`)
  };

  return (
    <form className="flex gap-6">
      <label htmlFor="limit-select">Limit:</label>
      <select
        name="limit"
        id="limit-select"
        onChange={handleChange}
        defaultValue={1}
      >
        {ITEMLIMITS.map((item) => (
          <option key={`limit-select${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}
