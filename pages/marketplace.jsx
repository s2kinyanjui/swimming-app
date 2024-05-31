import { Carousel } from "@mantine/carousel";
import {
  Badge,
  Button,
  Divider,
  Drawer,
  Indicator,
  Input,
  Modal,
  Pagination,
  Pill,
  RangeSlider,
  Select,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronLeft,
  IconFilter,
  IconGrid4x4,
  IconHeart,
  IconList,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import classes from "../styles/Button.module.css";
import ProductModal from "@/components/ProductModal";
import ProductCard from "@/components/ProductCard";
import SelectionMarket from "@/components/SelectionMarket";
import ProductList from "@/components/ProductList";
import HeaderMarket from "@/components/HeaderMarket";

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
      <SelectionMarket onViewUpdate={handleGetView} />
      <ProductList view={view} />
    </div>
  );
}

export default marketplace;
