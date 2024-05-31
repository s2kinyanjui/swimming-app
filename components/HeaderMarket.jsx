import {
  ActionIcon,
  Avatar,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Group,
  Indicator,
  Input,
  Select,
  Stepper,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import {
  IconChevronLeft,
  IconSearch,
  IconShoppingBag,
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import classes from "../styles/Button.module.css";

import React, { useCallback, useState } from "react";
import CartItem from "./CartItem";
import PaymentCart from "./PaymentCart";
import DeliveryCart from "./DeliveryCart";
import Cart from "./Cart";

const HeaderMarket = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(1);

  const handleGoToHome = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <div className="py-8 px-4 space-y-4">
      <div className="flex justify-between">
        <Button
          variant="subtle"
          w={32}
          h={32}
          radius={32}
          color="dark"
          p={0}
          onClick={handleGoToHome}>
          <IconChevronLeft />
        </Button>
        <p className="font-medium">Marketplace</p>
        <div onClick={open}>
          <Indicator inline label={9} size={16}>
            <IconShoppingBag />
          </Indicator>
        </div>
      </div>
      <Input
        variant="filled"
        placeholder="Search products"
        leftSection={<IconSearch size={16} opacity={0.6} />}
      />

      <Drawer
        opened={opened}
        position="right"
        size={"100%"}
        onClose={close}
        title={
          <Title className="py-4" order={3}>
            Checkout
          </Title>
        }>
        <div className="space-y-3 pb-[100px]">
          <Stepper
            orientation="vertical"
            active={active}
            onStepClick={setActive}>
            <Stepper.Step label="Cart" description={<Cart />} />

            <Stepper.Step label="Delivery" description={<DeliveryCart />} />

            <Stepper.Step label="Payment" description={<PaymentCart />} />
          </Stepper>
        </div>

        <Button fullWidth className="">
          Pay now
        </Button>
      </Drawer>
    </div>
  );
};

export default HeaderMarket;
