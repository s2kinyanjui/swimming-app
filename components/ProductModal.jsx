import { Carousel } from "@mantine/carousel";
import { Button, Divider, Modal, Title } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import React, { useCallback, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "../styles/Button.module.css";

export default function ProductModal({ opened, close }) {
  const [selection, setSelection] = useState({
    size: "",
    color: "",
  });

  const handleOnClickSize = useCallback(
    (size) => {
      setSelection((_selection) => ({
        ..._selection,
        size,
      }));
    },
    [selection?.size]
  );

  const handleOnClickColor = useCallback(
    (color) => {
      setSelection((_selection) => ({
        ..._selection,
        color,
      }));
    },
    [selection?.color]
  );

  return (
    <Modal opened={opened} onClose={close} fullScreen>
      <div className="space-y-8">
        <Carousel withIndicators withControls={false}>
          <Carousel.Slide>
            <img src="/product.png" alt="" className="w-full" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="/product.png" alt="" className="w-full" />
          </Carousel.Slide>
        </Carousel>

        <div>
          <p className="font-medium text-[0.9rem] text-black">Shirt Polo</p>
          <p className="font-light text-[0.8rem] text-gray-700">Arena</p>
          <p className="text-[#228BE6] font-medium">Ksh 2500</p>
        </div>

        <div className="flex justify-between">
          <div className="flex space-x-2">
            <p className="font-light text-[0.8rem] text-gray-700">Size</p>
            {["S", "M", "L", "XL"].map((size) => (
              <Button
                h={24}
                w={24}
                p={0}
                radius={24}
                onClick={() => handleOnClickSize(size)}
                color="dark"
                variant={size == selection?.size ? "filled" : "outline"}>
                <p className="font-light text-[0.6rem]">{size}</p>
              </Button>
            ))}
          </div>

          <div className="flex space-x-2">
            <p className="font-light text-[0.8rem] text-gray-700">Color</p>
            {["red", "blue", "purple", "yellow"].map((color) => (
              <Button
                h={24}
                w={24}
                p={0}
                radius={24}
                onClick={() => handleOnClickColor(color)}
                color={color}
                variant="filled"
                classNames={{
                  root: color == selection?.color ? classes.root : null,
                }}></Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Button leftSection={<IconShoppingCart size={16} />} fullWidth>
            Add to cart
          </Button>
          <p className="font-light text-[0.8rem] text-gray-700">
            Estimated to be delivered on: <strong>19 May - 24 May</strong>
          </p>
        </div>
        <Divider />

        <div className="space-y-8">
          {["material", "care"].map((header) => (
            <div className="space-y-1">
              <Title order={5} className="text-left">
                {header.toUpperCase()}
              </Title>
              <p className="font-light text-[0.8rem] text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ex culpa placeat a, aliquid doloremque et sequi
                quisquam quas modi ipsam quam sit accusantium sapiente
                laudantium cumque, maiores voluptatum nesciunt!
              </p>
            </div>
          ))}
        </div>

        <div>
          <Title order={3}>YOU MAY ALSO LIKE</Title>
          <br />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((product, i) => (
              <ProductCard key={i} view={"grid"} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
