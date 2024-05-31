import React from "react";
import ProductModal from "./ProductModal";
import { Button } from "@mantine/core";
import { IconHeart, IconStarFilled } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

const ProductCard = ({ view }) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <ProductModal opened={opened} close={close} />
      {view == "list" ? (
        <div className="flex space-x-4">
          <img
            onClick={open}
            src="/product.png"
            alt="product"
            className="w-[120px] object-cover"
          />
          <div className="mt-2 flex-1 space-y-4">
            <div className="flex w-full justify-between">
              <div>
                <p className="font-medium text-[0.9rem]">Shirt Polo</p>
                <p className="font-light text-[0.8rem] text-gray-700">Arena</p>
              </div>
              <Button
                variant="subtle"
                color="dark"
                radius={36}
                p={0}
                w={36}
                h={36}>
                <IconHeart size={16} />
              </Button>
            </div>

            <div className="flex space-x-2">
              <p className="text-[0.8rem] mt-[2px] font-light text-gray-700">
                Size
              </p>
              <div className="flex space-x-1">
                {["S", "M", "L", "XL"].map((size) => (
                  <div className=" relative inline h-[25px] w-[25px] rounded-[32px] border border-gray-200">
                    <p className=" text-[0.7rem] absolute top-[50%] left-[50%] text-gray-400 translate-x-[-50%] translate-y-[-50%]">
                      {size}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-[#228BE6] font-medium">Ksh 2500</p>
              <p className="text-[0.8rem] font-light text-gray-700">
                <IconStarFilled
                  size={16}
                  className="inline mt-[-6px]"
                  color="#FFD700"
                />{" "}
                4.8 Rating
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={open} className="col-span-1 mb-4">
          <img
            onClick={open}
            src="/product.png"
            alt="product"
            className="w-full object-cover"
          />
          <div className="mt-2">
            <p className="font-medium text-[0.9rem]">Shirt Polo</p>
            <p className="font-light text-[0.8rem] text-gray-700">Arena</p>
            <p className="text-[#228BE6] font-medium">Ksh 2500</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
