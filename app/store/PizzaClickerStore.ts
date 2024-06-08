import { create } from "zustand";

type State = {
  points: number;
  level: number;
  incrementValue: number;
  incrementValue2: number;
  incrementValue3: number;
  autoClickerCount: number;
  autoClickerCount2: number;
  autoClickerCount3: number;
  highestLevel: number;
  getLevelProgress: () => number;
  increment: () => void;
  levelUp: () => void;
  getLevel: () => string;
  buyIncrement: (incrementNumber: number) => void;
  buyAutoClicker: (incrementNumber: number) => void;
  autoClickerIncrement: () => void;
  clickCount: number;
  clickBonus: boolean;
  handleFastClicks: () => void;
};
let autoClickerInterval: NodeJS.Timeout | null = null;

export const usePizzaClicker = create<State>((set, get) => ({
  points: 0,
  level: 1,
  incrementValue: 1,
  incrementValue2: 0,
  incrementValue3: 0,
  autoClickerCount: 0,
  autoClickerCount2: 0,
  autoClickerCount3: 0,
  highestLevel: 1,
  clickCount: 0,
  clickBonus: false,

  increment: () => {
    set((state) => {
      const incrementTotal =
        state.incrementValue +
        state.incrementValue2 * 5 +
        state.incrementValue3 * 100;
      const bonusMultiplier = state.clickBonus ? 2 : 1;
      return {
        points: state.points + incrementTotal * bonusMultiplier,
      };
    });

    get().handleFastClicks();
  },

  autoClickerIncrement: () =>
    set((state) => ({
      points:
        state.points +
        state.autoClickerCount +
        state.autoClickerCount2 * 6 +
        state.autoClickerCount3 * 200,
    })),

  levelUp: () => set((state) => ({ level: state.level + 1 })),

  buyIncrement: (incrementNumber: number) => {
    const { points, incrementValue, incrementValue2, incrementValue3 } = get();
    if (incrementNumber === 5 && points >= 500) {
      set({
        points: points - 500,
        incrementValue2: incrementValue2 + 1,
      });
    } else if (incrementNumber === 100 && points >= 12000) {
      set({
        points: points - 12000,
        incrementValue3: incrementValue3 + 1,
      });
    } else if (incrementNumber === 1 && points >= 50) {
      set({
        points: points - 50,
        incrementValue: incrementValue + incrementNumber,
      });
    }
  },

  buyAutoClicker: (incrementNumber: number) => {
    const { points, autoClickerCount, autoClickerCount2, autoClickerCount3 } =
      get();
    if (incrementNumber === 6 && points >= 1100) {
      set({
        points: points - 1100,
        autoClickerCount2: autoClickerCount2 + 1,
      });
    } else if (incrementNumber === 200 && points >= 100000) {
      set({
        points: points - 100000,
        autoClickerCount3: autoClickerCount3 + 1,
      });
    } else if (incrementNumber === 1 && points >= 150) {
      set({
        points: points - 150,
        autoClickerCount: autoClickerCount + incrementNumber,
      });
    }
    if (autoClickerInterval) {
      clearInterval(autoClickerInterval);
    }
    autoClickerInterval = setInterval(() => {
      get().autoClickerIncrement();
    }, 1000);
  },

  getLevelProgress: () => {
    const { points, highestLevel } = get();
    let nextLevelPoints;
    let currentLevelPoints;

    const levelPoints = [
      0, 10, 200, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
    ];

    if (highestLevel >= 11) {
      return 100;
    } else {
      nextLevelPoints = levelPoints[highestLevel];
      currentLevelPoints = levelPoints[highestLevel - 1];
    }

    const progress =
      ((points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) *
      100;

    return progress;
  },

  getLevel: () => {
    const { points, highestLevel } = get();
    let newLevel = highestLevel;
    let levelName = "1";

    const levels = [
      { min: 10, max: 200, name: "2", level: 2 },
      { min: 200, max: 1000, name: "3", level: 3 },
      { min: 1000, max: 2000, name: "4", level: 4 },
      { min: 2000, max: 3000, name: "5", level: 5 },
      { min: 3000, max: 4000, name: "6", level: 6 },
      { min: 4000, max: 5000, name: "7", level: 7 },
      { min: 5000, max: 6000, name: "8", level: 8 },
      { min: 6000, max: 7000, name: "9", level: 9 },
      { min: 7000, max: 8000, name: "10", level: 10 },
      { min: 8000, max: 9000, name: "cz four", level: 11 },
      { min: 9000, max: 10000, name: "lamborgini", level: 12 },
      {
        min: 10000,
        max: 11000,
        name: "https://www.youtube.com/watch?v=B5if2hthPCs",
        level: 13,
      },
      { min: 11000, max: 12000, name: "hsaka profile pic", level: 14 },
      {
        min: 12000,
        max: 13000,
        name: "https://www.youtube.com/watch?v=LrkEc2V3mO4",
        level: 15,
      },
      { min: 13000, max: 14000, name: "larry fink", level: 16 },
      { min: 14000, max: 15000, name: "capybara", level: 17 },
      {
        min: 15000,
        max: 16000,
        name: "https://www.youtube.com/watch?v=RF8BDRkRct4",
        level: 18,
      },
      { min: 16000, max: 17000, name: "logo", level: 19 },
      {
        min: 17000,
        max: 18000,
        name: "https://www.youtube.com/watch?v=wIhTGB3wqV0",
        level: 20,
      },
      { min: 18000, max: 19000, name: "logo", level: 21 },
      {
        min: 19000,
        max: 20000,
        name: "https://www.youtube.com/watch?v=xXrkgWDcd7c&t=5s",
        level: 22,
      },
      { min: 20000, max: 21000, name: "logo", level: 23 },
      {
        min: 21000,
        max: 22000,
        name: "https://www.youtube.com/watch?v=EMXTdjj8TAg",
        level: 24,
      },
      { min: 22000, max: 23000, name: "logo", level: 25 },
      {
        min: 23000,
        max: 24000,
        name: "https://www.youtube.com/watch?v=wulExLzQ00A",
        level: 26,
      },
      { min: 24000, max: 25000, name: "logo", level: 27 },
      {
        min: 25000,
        max: 26000,
        name: "https://www.youtube.com/watch?v=ZcexKILIH10",
        level: 28,
      },
      { min: 26000, max: 27000, name: "logo", level: 29 },
      {
        min: 27000,
        max: 28000,
        name: "https://www.youtube.com/watch?v=lhErkrnH2gw",
        level: 30,
      },
      { min: 28000, max: 29000, name: "logo", level: 31 },
      {
        min: 29000,
        max: 30000,
        name: "https://www.youtube.com/watch?v=x18AEgw_szc",
        level: 32,
      },
      { min: 30000, max: 31000, name: "logo", level: 33 },
      {
        min: 31000,
        max: 32000,
        name: "https://www.youtube.com/watch?v=q-JuKiVFtbI",
        level: 34,
      },
      { min: 32000, max: 33000, name: "logo", level: 35 },
      {
        min: 33000,
        max: 34000,
        name: "https://www.youtube.com/watch?v=NQgBE3qW_Ow",
        level: 36,
      },
      { min: 34000, max: 35000, name: "logo", level: 37 },
      {
        min: 35000,
        max: 36000,
        name: "https://www.youtube.com/watch?v=YCtzBJMRlCA",
        level: 38,
      },
      { min: 36000, name: "logo", level: 39 },
    ];

    for (let i = 0; i < levels.length; i++) {
      const { min, max, name, level } = levels[i];
      if (points >= min && (max ? points < max : true)) {
        levelName = name;
        newLevel = level;
        break;
      }
    }

    if (newLevel > highestLevel) {
      set({ level: newLevel, highestLevel: newLevel });
    }

    return highestLevel;
  },
  handleFastClicks: () => {
    set((state) => ({ clickCount: state.clickCount + 1 }));

    const { clickCount } = get();
    if (clickCount >= 100) {
      set({ clickBonus: true, clickCount: 0 });

      setTimeout(() => set({ clickBonus: false }), 10000);
    }
  },

  decrementClickCount: () => {
    set((state) => ({ clickCount: Math.max(0, state.clickCount - 1) }));
  },
}));

setInterval(() => {
  usePizzaClicker.getState().decrementClickCount();
}, 1000);
