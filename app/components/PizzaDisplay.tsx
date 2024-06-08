import React, { useState } from "react";
import PizzaImg from "../Images/pizzaImg.svg";
import miniPizza from "../Images/mini-pizza.png";
import ProgressBar, { BonusProgressBar } from "./ProgressBar";
import { usePizzaClicker } from "~/store/PizzaClickerStore";
import PizzaJump from "./PizzaJump";
import Abilities from "./Abilities";

function PizzaDisplay() {
  const progress = 90;
  const [isClicked, setIsClicked] = useState(false);
  const [pizzas, setPizzas] = useState<{ x: number; y: number }[]>([]);

  const { increment, points, clickCount, clickBonus } = usePizzaClicker(
    (state: any) => ({
      increment: state.increment,
      points: state.points,
      clickCount: state.clickCount,
      clickBonus: state.clickBonus,
    })
  );

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsClicked(true);
    increment();
    setPizzas((prev) => [...prev, { x: event.clientX, y: event.clientY }]);
    setTimeout(() => setIsClicked(false), 100);
  };

  return (
    <div className="flex gap-10">
      <div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="glow flex w-16 flex-col items-center justify-center">
            <img src={miniPizza} alt="minipizza" className="size-16" />
            <p className="text-5xl font-extrabold text-white">{points}</p>
          </div>
          <div className="flex w-96 items-center justify-center">
            <img
              draggable="false"
              src={PizzaImg}
              alt="pizza"
              className={isClicked ? "clicked" : ""}
              onClick={handleClick}
            />
          </div>
          <ProgressBar progress={progress} />{" "}
          <BonusProgressBar progress={clickBonus ? 100 : clickCount} />
        </div>
        {pizzas.map((pizza, index) => (
          <PizzaJump key={index} x={pizza.x} y={pizza.y} />
        ))}
      </div>
      <div>
        <Abilities />
      </div>
    </div>
  );
}

export default PizzaDisplay;
