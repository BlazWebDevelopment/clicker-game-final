import React, { useEffect, useRef } from "react";
import miniPizza from "../Images/mini-pizza.png";

interface PizzaJumpProps {
  x: number;
  y: number;
}

const PizzaJump: React.FC<PizzaJumpProps> = ({ x, y }) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = "0";
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      ref={ref}
      src={miniPizza}
      alt="mini pizza"
      className="w-24"
      style={{
        position: "absolute",
        top: y,
        left: x,
        transition: "opacity 0.5s, transform 0.5s",
        transform: "translate(-50%, -50%) scale(0.5)",
        pointerEvents: "none",
      }}
    />
  );
};

export default PizzaJump;
