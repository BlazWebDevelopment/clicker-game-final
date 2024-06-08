import React from "react";
import PersonImage from "../Images/person-ai.png";
import pepe1Img from "../Images/pepe1.jpeg";
import pepe2Img from "../Images/pepe2.png";
import pepe3Img from "../Images/pepe3.png";
import Saylor1Img from "../Images/Michael-Saylor.png";
import Saylor2Img from "../Images/saylor2.jpeg";
import Lambo from "../Images/lambo.png";
import Hsaka from "../Images/hsaka.jpeg";
import LarryFink from "../Images/larry.webp";
import Capybara from "../Images/capybara.jpg";
import NormalPizzaImg from "../Images/hot-italian-pizza-cutout-png.webp";
import TomatoPizzaImg from "../Images/pizza-tomato.png";
import { usePizzaClicker } from "~/store/PizzaClickerStore";

const levelContent = {
  1: <img src={PersonImage} alt="level 1" />,
  2: <img src={NormalPizzaImg} alt="level 2" />,
  3: <img src={TomatoPizzaImg} alt="level 3" />,
  4: <img src={Saylor1Img} alt="level 4" />,
  5: <img src={Saylor2Img} alt="level 5" />,
  6: <img src={pepe1Img} alt="level 6" />,
  7: <img src={pepe2Img} alt="level 7" />,
  8: <img src={pepe3Img} alt="level 8" />,
  9: <img src={Lambo} alt="level 9" />,
  10: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/B5if2hthPCs?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  11: <img src={Hsaka} alt="level 11" />,
  12: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/LrkEc2V3mO4?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  13: <img src={LarryFink} alt="level 13" />,
  14: <img src={Capybara} alt="level 14" />,
  15: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/RF8BDRkRct4?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  16: <img src={PersonImage} alt="level 16" />,
  17: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/wIhTGB3wqV0?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  18: <img src={PersonImage} alt="level 18" />,
  19: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/xXrkgWDcd7c?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  20: <img src={PersonImage} alt="level 20" />,
  21: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/EMXTdjj8TAg?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  22: <img src={PersonImage} alt="level 22" />,
  23: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/wulExLzQ00A?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  24: <img src={PersonImage} alt="level 24" />,
  25: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/ZcexKILIH10?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  26: <img src={PersonImage} alt="level 26" />,
  27: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/lhErkrnH2gw?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  28: <img src={PersonImage} alt="level 28" />,
  29: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/x18AEgw_szc?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  30: <img src={PersonImage} alt="level 30" />,
  31: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/embed/q-JuKiVFtbI?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  32: <img src={PersonImage} alt="level 32" />,
  33: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/watch?v=NQgBE3qW_Ow?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  34: <img src={PersonImage} alt="level 32" />,
  35: (
    <iframe
      width="460"
      height="315"
      src="https://www.youtube.com/watch?v=YCtzBJMRlCA?autoplay=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  36: <img src={PersonImage} alt="level 32" />,
};

function LvlUpDisplay() {
  const { getLevel } = usePizzaClicker((state: any) => ({
    getLevel: state.getLevel,
  }));
  const currentLvl = getLevel();

  return <div className="w-96">{levelContent[currentLvl]}</div>;
}

export default LvlUpDisplay;
