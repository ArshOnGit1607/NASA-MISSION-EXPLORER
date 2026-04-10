import { useState, useEffect } from "react";

function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate 70 random stars
    const generatedStars = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`, // 1px to 4px
      animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
      animationDelay: `${Math.random() * 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="StarsContainer">
      {stars.map((star) => (
        <div
          key={star.id}
          className="Star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;
