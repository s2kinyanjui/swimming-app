import {
  Badge,
  Button,
  Indicator,
  Input,
  Pagination,
  Pill,
  Select,
} from "@mantine/core";
import {
  IconChevronLeft,
  IconFilter,
  IconGrid4x4,
  IconHeart,
  IconList,
  IconSearch,
  IconShoppingBag,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";

function marketplace() {
  const [view, setView] = useState("grid");

  const handleGetView = useCallback(
    (view) => {
      setView(view);
    },
    [view]
  );

  return (
    <div>
      <HeaderMarket />
      <Selection onViewUpdate={handleGetView} />
      <ProductList view={view} />
    </div>
  );
}

const HeaderMarket = () => {
  return (
    <div className="py-8 px-4 space-y-4">
      <div className="flex justify-between">
        <Button variant="subtle" w={32} h={32} radius={32} color="dark" p={0}>
          <IconChevronLeft />
        </Button>
        <p className="font-medium">Marketplace</p>
        <Indicator inline label={9} size={16}>
          <IconShoppingBag />
        </Indicator>
      </div>
      <Input
        variant="filled"
        placeholder="Search products"
        leftSection={<IconSearch size={16} opacity={0.6} />}
      />
    </div>
  );
};
const Selection = ({ onViewUpdate }) => {
  const [gridViewOn, setGridViewOn] = useState(true);

  const handleToggleView = useCallback(() => {
    setGridViewOn(!gridViewOn);
  }, [gridViewOn]);

  useEffect(() => {
    onViewUpdate(gridViewOn ? "grid" : "list");
  }, [gridViewOn]);

  return (
    <div className=" px-4 space-y-3">
      <div className="flex justify-between">
        <p className="font-medium mt-1">PRODUCTS &#40;4500&#41;</p>
        <div className="flex space-x-2">
          <Select
            size="sm"
            style={{ width: 100 }}
            data={["NEW", "COSTUME"]}
            variant="filled"
            value="NEW"
          />
          <div className="flex space-x-2">
            <Button
              onClick={handleToggleView}
              variant="light"
              w={36}
              h={36}
              radius={4}
              color="dark"
              p={0}>
              <img
                src={gridViewOn ? "/detail.svg" : "/grid.svg"}
                className="w-[18px]"
              />
            </Button>
            <Button variant="light" w={36} h={36} radius={4} color="dark" p={0}>
              <IconFilter size={18} />
            </Button>
          </div>
        </div>
      </div>
      <div className="space-x-2">
        <Pill withRemoveButton>Free shipping</Pill>
        <Pill withRemoveButton>Swimming Costumes</Pill>
      </div>
    </div>
  );
};
const ProductList = ({ view }) => {
  return (
    <div className="px-4 pt-8">
      <div className={view == "grid" ? "grid grid-cols-2 gap-4" : " space-y-2"}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product, i) => (
          <Product key={i} view={view} />
        ))}
      </div>
      <br />

      <br />
    </div>
  );
};

const Product = ({ view }) => {
  if (view == "list")
    return (
      <div className="flex space-x-4">
        <img
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
              <IconHeart />
            </Button>
          </div>

          <div className="flex space-x-2">
            <p className="text-[0.8rem] mt-1 font-light text-gray-700">Size</p>
            <div className="flex space-x-1">
              {["S", "M", "L", "XL"].map((size) => (
                <div className=" relative inline h-[30px] w-[30px] rounded-[32px] border border-gray-400">
                  <p className=" text-[0.7rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
    );

  return (
    <div className="col-span-1 mb-4">
      <img src="/product.png" alt="product" className="w-full object-cover" />
      <div className="mt-2">
        <p className="font-medium text-[0.9rem]">Shirt Polo</p>
        <p className="font-light text-[0.8rem] text-gray-700">Arena</p>
        <p className="text-[#228BE6] font-medium">Ksh 2500</p>
      </div>
    </div>
  );
};

export default marketplace;
