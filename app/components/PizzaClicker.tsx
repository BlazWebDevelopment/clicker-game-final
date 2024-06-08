import React from "react";
import PersonImage from "../Images/person-ai.png";
import PizzaDisplay from "./PizzaDisplay";
import { usePizzaClicker } from "~/store/PizzaClickerStore";
import pepe1Img from "../Images/pepe1.jpeg";
import pepe2Img from "../Images/pepe2.png";
import pepe3Img from "../Images/pepe3.png";
import Saylor1Img from "../Images/Michael-Saylor.png";
import Saylor2Img from "../Images/saylor2.jpeg";
import NormalPizzaImg from "../Images/hot-italian-pizza-cutout-png.webp";
import TomatoPizzaImg from "../Images/pizza-tomato.png";
import LvlUpDisplay from "./LvlUpDisplay";

function PizzaClicker() {
  const { level, points } = usePizzaClicker((state: any) => ({
    points: state.points,
    level: state.level,
  }));

  return (
    <div className="flex h-screen items-center justify-center gap-40">
      <LvlUpDisplay />
      <div>
        <PizzaDisplay />
      </div>
    </div>
  );
}

export default PizzaClicker;
