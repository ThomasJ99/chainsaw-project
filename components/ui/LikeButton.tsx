"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
  pTitle: string;
}

export default function LikeButton({ pTitle }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  //Get the amount of likes
  useEffect(() => {
    const fetchLikes = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${pTitle}`,
      );
      const data = await response.json();
    };
    // Dependency - if this value changes/loads for the first time(mount) -
    // it activates function
  }, [pTitle]);
  return <button type="button">like</button>;
}
