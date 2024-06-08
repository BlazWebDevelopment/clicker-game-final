import React from "react";
import { usePizzaClicker } from "../store/PizzaClickerStore";
import PointerImg from "../Images/pointer.png";
import CoinImg from "../Images/coin.png";
import TimeImg from "../Images/time.webp";
import { AbilityButton } from "./AbilityDisplay";

function Abilities() {
  const {
    points,
    buyIncrement,
    incrementValue,
    incrementValue2,
    incrementValue3,
    buyAutoClicker,
    autoClickerCount,
    autoClickerCount2,
    autoClickerCount3,
  } = usePizzaClicker((state: any) => ({
    points: state.points,
    buyIncrement: state.buyIncrement,
    buyAutoClicker: state.buyAutoClicker,
    autoClickerCount: state.autoClickerCount,
    autoClickerCount2: state.autoClickerCount2,
    autoClickerCount3: state.autoClickerCount3,
    incrementValue: state.incrementValue,
    incrementValue2: state.incrementValue2,
    incrementValue3: state.incrementValue3,
  }));
  return (
    <div className="flex flex-col gap-2">
      <AbilityButton
        power={() => buyIncrement(1)}
        points={points}
        image={PointerImg}
        coinImage={CoinImg}
        value={incrementValue}
        coinPrice={50}
        numberRaise={1}
        type={"click"}
      />
      <AbilityButton
        power={() => buyAutoClicker(1)}
        points={points}
        image={TimeImg}
        coinImage={CoinImg}
        value={autoClickerCount}
        coinPrice={150}
        numberRaise={1}
        type={"auto"}
      />
      <AbilityButton
        power={() => buyIncrement(5)}
        points={points}
        image={PointerImg}
        coinImage={CoinImg}
        value={incrementValue2}
        coinPrice={500}
        numberRaise={5}
        type={"click"}
      />
      <AbilityButton
        power={() => buyAutoClicker(6)}
        points={points}
        image={TimeImg}
        coinImage={CoinImg}
        value={autoClickerCount2}
        coinPrice={1100}
        numberRaise={6}
        type={"auto"}
      />
      <AbilityButton
        power={() => buyIncrement(100)}
        points={points}
        image={PointerImg}
        coinImage={CoinImg}
        value={incrementValue3}
        coinPrice={12000}
        numberRaise={100}
        type={"click"}
      />
      <AbilityButton
        power={() => buyAutoClicker(200)}
        points={points}
        image={TimeImg}
        coinImage={CoinImg}
        value={autoClickerCount3}
        coinPrice={100000}
        numberRaise={200}
        type={"auto"}
      />
    </div>
  );
}

export default Abilities;
