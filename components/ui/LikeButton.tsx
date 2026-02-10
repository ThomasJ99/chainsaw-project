"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
  pTitle: string;
}

export default function LikeButton({ pTitle }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
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
        action: hasLiked ? "unlike" : "like",
      }),
    });
    const data = await response.json();
    setLikes(data.likes);
    setHasLiked(!hasLiked);    
  };

  return (
    <button
      onClick={toggleLike}
      className={`p-10 bg-orange-400
    ${hasLiked ? "bg-orange-500 text-white" : "hover:bg-orange-600"}`}
      type="button"
    >
      {hasLiked ? "Liked " : "Like "}
      {likes > 0 && <span>{likes}</span>}
    </button>
  );
}
