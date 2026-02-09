"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
  pTitle: string;
}

export default function LikeButton({ pTitle }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  //Get the amount of likes
  useEffect(() => {
    // Can use async inside a function thats not the export one
    const fetchLikes = async () => {
      const response = await fetch(`/api/like?productName=${pTitle}`);
      const data = await response.json();
      setLikes(data.likes);
    };
    fetchLikes();
    // Dependency - if this value changes/loads for the first time(mount) -
    // it activates function
  }, [pTitle]);

  const toggleLike = async () => {
    const response = await fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pTitle,
        action: "like",
      }),
    });
    const data = await response.json();
    setLikes(data.likes);
  };

  return (
    <button onClick={toggleLike} className={"p-10 bg-amber-200"} type="button">
      {likes > 0 && <span>{likes}</span>}
    </button>
  );
}
