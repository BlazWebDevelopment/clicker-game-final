import React from "react";
import { usePizzaClicker } from "~/store/PizzaClickerStore";

interface ProgressBarProps {
  progress: number;
}

type BonusProgressBarProps = {
  progress: number;
};

export const BonusProgressBar: React.FC<BonusProgressBarProps> = ({
  progress,
}) => {
  return (
    <div className="h-4 w-full rounded-full bg-gray-200">
      <div
        style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white"
      ></div>
    </div>
  );
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const { level, getLevel, getLevelProgress } = usePizzaClicker(
    (state: any) => ({
      level: state.level,
      getLevel: state.getLevel,
      getLevelProgress: state.getLevelProgress,
    })
  );
  const levelProgress = getLevelProgress().toFixed(2);

  return (
    <div className="relative h-8 w-full overflow-hidden rounded-full bg-gray-500">
      <div
        className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-center text-xs text-white"
        style={{
          width: `${levelProgress}%`,
          transition: "width 0.5s ease-in-out",
        }}
      >
        <span className="absolute flex h-full w-full items-center justify-center p-2 text-lg font-bold">
          <p>
            lvl: {getLevel()} ({levelProgress}%)
          </p>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
