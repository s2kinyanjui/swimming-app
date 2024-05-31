import {
  ActionIcon,
  Button,
  Divider,
  Group,
  NumberInput,
  Select,
  rem,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconMinus, IconPlus, IconTrash, IconX } from "@tabler/icons-react";
import React, { useCallback, useRef, useState } from "react";
import classes from "../styles/Button.module.css";

function CartItem() {
  const [selection, setSelection] = useState({
    size: "",
    color: "",
  });
  const [value, setValue] = useState(0);
  const handlers = useRef();

  const openProduct = useCallback(() => {
    return null;
  }, []);

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

  const { width } = useViewportSize();

  return (
    <div className="mb-8">
      <div className=" flex w-full space-x-4">
        <img
          onClick={openProduct}
          src="/product.png"
          alt="product"
          className="w-[80px] object-contain"
        />
        <div className="mt-2 flex-1 space-y-[6px] relative mb-2">
          <Button
            w={24}
            h={24}
            p={0}
            radius={24}
            color="red"
            variant="light"
            className="absolute top-0 right-0">
            <IconX size={14} />
          </Button>
          <div className="space-y-1">
            <p className="font-medium text-[0.9rem] text-black">Shirt Polo</p>
            <p className="font-light text-[0.8rem] text-gray-700">Arena</p>
          </div>
          <div
            className={`flex space-x-2 overflow-x-scroll  max-w-[calc(${width} - 200px)`}>
            {["XS", "S", "M", "L"].map((size) => (
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
      </div>
      <Divider size={0.5} />

      <div className="flex space-x-8 justify-between ">
        <Select
          placeholder="Qty"
          data={["1", "2", "3", "4"]}
          variant="filled"
          size="xs"
          w={64}
        />
        <p className="text-[#228BE6] font-medium mt-[6px] float-right">
          Ksh 2,500
        </p>
      </div>
    </div>
  );
}

export default CartItem;
