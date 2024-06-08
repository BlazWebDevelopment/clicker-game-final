import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import LogoImg from "../../../Images/logo.png";
import PizzaClicker from "~/components/PizzaClicker";

export const meta: MetaFunction = () => {
  return [
    { title: "Blaz Dezman portfolio" },
    { name: "Portfolio", content: "Welcome to my portfolio!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="absolute left-0 top-0 h-auto w-64">
        <img src={LogoImg} />
      </div>
      <div>
        <PizzaClicker />
      </div>
    </div>
  );
}
