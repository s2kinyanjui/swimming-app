import { Avatar, Button, Divider, Drawer, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBuildingCommunity,
  IconCalendar,
  IconEdit,
  IconLogout,
  IconLogout2,
  IconNews,
  IconRss,
  IconShoppingBag,
} from "@tabler/icons-react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "./Footer";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between p-4">
      <Hamburger size={20} toggled={isOpen} toggle={setOpen} />

      <Drawer
        size="70%"
        opened={isOpen}
        onClose={() => setOpen(false)}
        title={null}>
        <div className="p-3 relative">
          <div className="space-y-3 mt-8">
            {[
              {
                label: "Marketplace",
                icon: <IconShoppingBag />,
                goTo: "/marketplace",
              },
              {
                label: "Community",
                icon: <IconBuildingCommunity />,
                goTo: "/community",
              },
              {
                label: "Events calendar",
                icon: <IconCalendar />,
                goTo: "/calendar",
              },
              {
                label: "News & Blogs",
                icon: <IconNews />,
                goTo: "/news",
              },
            ].map((item) => (
              <DrawerItem item={item} />
            ))}
          </div>
          <br />
          <Divider />

          <div className="py-3 flex w-full space-x-4 mt-2">
            <IconLogout2 color="red" />
            <Text c={"red"}>Log out</Text>
          </div>
        </div>

        <div className=" absolute bottom-4 w-4/5">
          <Footer />
        </div>
      </Drawer>

      <Avatar style={{ margin: 12 }} color="red" radius={"md"} size={48}>
        SK
      </Avatar>
    </div>
  );
}

export default Header;

const DrawerItem = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(item?.goTo)}
      className="py-3 flex w-full space-x-4">
      {item?.icon}
      <Text>{item?.label}</Text>
    </div>
  );
};
