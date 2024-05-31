import {
  Button,
  Divider,
  Drawer,
  Pill,
  RangeSlider,
  Switch,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";

import classes from "../styles/Button.module.css";

const SelectionMarket = ({ onViewUpdate }) => {
  const [gridViewOn, setGridViewOn] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

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
            <Button
              variant="light"
              w={36}
              h={36}
              radius={4}
              color="dark"
              p={0}
              onClick={open}>
              <IconFilter size={18} />
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        opened={opened}
        position="right"
        size={"80%"}
        onClose={close}
        title={
          <Title className="py-4" order={3}>
            Filter
          </Title>
        }>
        <div className="space-y-3">
          <div className="space-y-3">
            <Divider label="Category" labelPosition="right" />
            <div className="flex flex-wrap gap-2">
              {[
                "kickboards",
                "fins",
                "snorkets",
                "mens costume",
                "ladies costumes",
              ].map((category) => (
                <Switch
                  classNames={{
                    trackLabel: classes.trackLabel,
                    track: classes.track,
                  }}
                  color="gray"
                  size="lg"
                  onLabel={category.toUpperCase()}
                  offLabel={category.toUpperCase()}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <Divider label="Color" labelPosition="right" />
            <div className="flex flex-wrap gap-2">
              {["red", "green", "blue", "orange", "black"].map((color) => (
                <Switch
                  color={color}
                  classNames={{
                    trackLabel: classes.trackLabel,
                    track: classes.track,
                  }}
                  size="lg"
                  onLabel={color.toUpperCase()}
                  offLabel={color.toUpperCase()}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <Divider label="Brand" labelPosition="right" />
            <div className="flex flex-wrap gap-2">
              {["nike", "arena", "tyr", "adidas", "nabaiji"].map((brand) => (
                <Switch
                  classNames={{
                    trackLabel: classes.trackLabel,
                    track: classes.track,
                  }}
                  color="gray"
                  size="lg"
                  onLabel={brand.toUpperCase()}
                  offLabel={brand.toUpperCase()}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <Divider label="Size" labelPosition="right" />
            <div className="flex flex-wrap gap-2">
              {[
                "XS",
                "S",
                "M",
                "L",
                "XL",
                "XXL",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
              ].map((size) => (
                <Switch
                  color="gray"
                  classNames={{
                    trackLabel: classes.trackLabel,
                    track: classes.track,
                  }}
                  size="lg"
                  onLabel={size.toUpperCase()}
                  offLabel={size.toUpperCase()}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <Divider label="Price range" labelPosition="right" />
            <br />
            <div className="w-4/5 block mx-auto ">
              <RangeSlider
                color="black"
                size={2}
                defaultValue={[500, 15000]}
                min={0}
                max={50000}
                thumbSize={20}
                classNames={{ thumb: classes.thumb }}
                marks={[
                  { value: 500, label: "Ksh.500" },
                  { value: 15000, label: "Ksh. 15000" },
                ]}
                label={(value) => `Ksh. ${value.toFixed(0)}`}
                step={1}
                styles={{ markLabel: { display: "none" } }}
              />
              <br />
            </div>
          </div>
          <br />
          <Button fullWidth>Show filter results</Button>
        </div>
      </Drawer>

      <div className="space-x-2 flex">
        <Pill withRemoveButton>Free shipping</Pill>
        <Pill withRemoveButton>Swimming Costumes</Pill>
      </div>
    </div>
  );
};

export default SelectionMarket;
