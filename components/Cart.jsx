import { useViewportSize } from "@mantine/hooks";
import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mantine/core";

const Cart = () => {
  const { width } = useViewportSize();

  return (
    <div className={`space-y-3 p-4 w-[calc(${width}px-75px)]`}>
      {[1, 2, 3, 4, 5].map((el) => (
        <CartItem />
      ))}
      <br />
      <Divider />
      <div className="flex justify-between">
        <p className="font-medium text-[0.9rem] text-black">TOTAL</p>
        <p className="text-[#228BE6] font-medium">Ksh 25,000</p>
      </div>
      <br />
    </div>
  );
};

export default Cart;
