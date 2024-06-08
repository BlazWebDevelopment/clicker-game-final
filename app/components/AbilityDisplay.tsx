import React from "react";
export const AbilityButton = ({
  power,
  points,
  image,
  coinImage,
  value,
  coinPrice,
  numberRaise,
  type,
}: any) => {
  return (
    <button
      onClick={power}
      className={`flex h-[100px] w-[340px] items-center justify-between rounded-lg  px-5 py-2 text-white shadow-lg transition-all duration-300 ease-in-out 
            ${
              points < coinPrice
                ? "cursor-not-allowed bg-gray-500 opacity-60"
                : "bg-gradient-to-r from-blue-300 to-gray-500 hover:shadow-xl"
            }`}
      disabled={points < coinPrice}
    >
      <span>
        <img
          src={image}
          alt="pointer"
          className="w-16 rounded-full border-2 border-white p-2 shadow"
          draggable="false"
        />
      </span>
      <span className="flex flex-col gap-1">
        <p className="text-xl font-bold">Pointer</p>
        <p className="text-xl font-bold">
          {" "}
          +{numberRaise} {type === "click" ? "click" : "second"}
        </p>
        <span className="flex items-center gap-2">
          <img
            src={coinImage}
            alt="coin"
            className="w-6 rounded-full shadow"
            draggable="false"
          />
          <p className="text-xl font-bold">{coinPrice}</p>
        </span>
      </span>
      <span>
        <p className="text-6xl font-bold">{value}</p>
      </span>
    </button>
  );
};
