import { Avatar, Button, Divider, Drawer, Text } from "@mantine/core";
import {
  IconBuildingCommunity,
  IconEdit,
  IconLogout,
  IconLogout2,
  IconShoppingBag,
} from "@tabler/icons-react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
        <div className="p-3">
          <div>
            <div className="flex space-x-4">
              <Avatar radius={"sm"} color="blue" size={56}>
                SK
              </Avatar>
              <div className="mt-1">
                <Text fw={"bolder"}>Steve Kinuthia</Text>
                <Text c="dimmmed" size="xs">
                  s2kinyanjui@gmail.com
                </Text>
              </div>
            </div>
            <br />
            <Button
              fullWidth
              variant="light"
              size="xs"
              leftSection={<IconEdit size={14} />}>
              Edit profile
            </Button>
          </div>
          <br />

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
      </Drawer>
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
