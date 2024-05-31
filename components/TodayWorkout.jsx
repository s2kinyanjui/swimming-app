import {
  Accordion,
  Badge,
  Button,
  Card,
  Divider,
  Menu,
  Modal,
  Progress,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../styles/Accordion.module.css";
import {
  IconCheck,
  IconChecklist,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconEdit,
  IconInfoCircle,
  IconTrash,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import carousel from "../styles/Carousel.module.css";
import { DonutChart } from "@mantine/charts";
import { useDisclosure, useViewportSize } from "@mantine/hooks";

function TodayWorkout() {
  return (
    <div>
      <div className="flex justify-between">
        <Title order={4}>Today's workout</Title>
        <Button variant="subtle" size="xs">
          Show all
        </Button>
      </div>
      <br />

      <div className="w-full mt-3">
        <Carousel
          withIndicators
          withControls={false}
          classNames={{
            indicators: carousel.indicators,
            indicator: carousel.indicator,
          }}>
          <Carousel.Slide>
            <SetList />
          </Carousel.Slide>
          <Carousel.Slide>
            <WorkoutStats />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}

export default TodayWorkout;

const SetList = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [current, setCurrent] = useState(null);

  const sections = [
    {
      id: 1,
      name: "Warm up",
      key: "warmup",
      sets: [
        {
          name: "Endurance Builder",
          distance: "1000m",
          focus: ["Endurance"],
          equipment: null,
          count: 1,
          timeLimit: "30m",
          pace: "Moderate",
          done: true,
          description:
            "Swim continuously for 1000 meters at a moderate pace to build endurance.",
        },
        {
          name: "Speed Intervals",
          distance: "50m",
          count: 6,
          focus: ["Speed"],
          equipment: ["Swim fins"],
          timeLimit: null,
          pace: "Sprint",
          done: true,
          description:
            "Perform 6 repetitions of 50 meters each at a sprint pace with swim fins for maximum speed.",
        },
        {
          name: "Kicks",
          distance: "100m",
          count: 5,
          focus: ["Technique"],
          equipment: ["Kickboard"],
          timeLimit: null,
          pace: "Moderate",
          done: true,
          description:
            "Swim 500 meters using a kickboard focusing on refining swimming technique.",
        },
        {
          name: "Breathing Control",
          distance: "100m",
          count: 4,
          focus: ["Breathing"],
          equipment: ["Pull buoy"],
          timeLimit: null,
          pace: "Moderate",
          description:
            "Swim 400 meters using a pull buoy to isolate the arms and focus on breathing control.",
        },
        {
          name: "Pyramid Drill #1",
          distance: "50m , 100m , 200m",
          count: 1,
          focus: ["Endurance", "Speed"],
          equipment: null,
          timeLimit: null,
          pace: "Moderate",
          description:
            "Swim varying distances in a pyramid pattern: 50m, 100m, 200m, 100m, 50m. Increase pace as the distance decreases.",
        },
      ],
    },
    {
      id: 2,
      name: "Main set",
      key: "mainset",
      sets: [],
    },
    {
      id: 3,
      name: "Cool down",
      key: "cooldown",
      sets: [],
    },
  ];

  const items = sections.map((section) => (
    <Accordion.Item key={section.id} value={section?.key}>
      <Accordion.Control>
        <Text fw="bold" style={{ color: "gray" }}>
          {section.name.toUpperCase()}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <div className="space-y-2">
          {section.sets.map((set, i) => (
            <Set set={set} count={i + 1} />
          ))}
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  const handleStartWorkout = () => {
    // Go to last done workout
    setCurrent(1);
    open();
  };

  return (
    <div className="px-2">
      <Accordion maw={400} defaultValue="warmup" classNames={classes}>
        {items}
      </Accordion>

      <br />
      <div className="flex justify-center space-x-3">
        <Button fullWidth size="lg" onClick={handleStartWorkout}>
          Start workout
        </Button>

        <Menu shadow="md">
          <Menu.Target>
            <Button variant="light" h={48} w={48} p={0}>
              <IconChevronDown size={16} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<IconEdit size={14} />}>
              Edit workout
            </Menu.Item>
            <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
              Delete workout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <br />

      <Modal
        withCloseButton={false}
        onClose={close}
        opened={opened}
        title={
          <div className="flex w-[300px] justify-between">
            <UnstyledButton onClick={close}>
              <IconChevronLeft />
            </UnstyledButton>

            <p className="mt-1">
              #{current}{" "}
              <span className="text-gray-400">
                / {sections[0]?.sets?.length}
              </span>
            </p>
          </div>
        }>
        <br />
        <Title order={3}>{sections[0]?.sets[current]?.name}</Title>
        <br />
        <div className="bg-gray-200 block mx-auto h-[200px] w-[200px]" />
        <br />
        <div className="space-y-2">
          <p className="text-[orange] text-[0.8rem]">
            <IconInfoCircle className="inline mr-1" size={20} color="orange" />
            Requires kickboard , pull buoy
          </p>
          <div className="w-full flex justify-between py-2  border-solid border-gray-300 border-b">
            <p>Distance</p>
            <p className="font-medium">
              {sections[0]?.sets[current]?.distance} X
              {sections[0]?.sets[current]?.count}
            </p>
          </div>
          <div className="w-full flex justify-between py-2  border-solid border-gray-300 border-b">
            <p>Focus</p>

            <div className="flex space-x-1">
              {sections[0]?.sets[current]?.focus.map((el) => (
                <Badge
                  radius={"xs"}
                  classNames={{ root: classes.badgeRoot }}
                  color={
                    el == "Speed"
                      ? "purple"
                      : el == "Endurance"
                      ? "yellow"
                      : el == "Technique"
                      ? "orange"
                      : el == "Kicks"
                      ? "cyan"
                      : el == "Pulls"
                      ? "magenta"
                      : el == "Breathing" && "green"
                  }></Badge>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-between py-2  border-solid border-gray-300 border-b">
            <p>Pace</p>
            <p className="font-medium">{sections[0]?.sets[current]?.pace}</p>
          </div>
        </div>
        <div className="w-full flex justify-between py-2  border-solid border-gray-300 border-b">
          <p>Time limit</p>
          <p className="font-medium">{sections[0]?.sets[current]?.timeLimit}</p>
        </div>
        <br />

        <Button.Group>
          <Button fullWidth variant="outline" color="red" size="lg">
            Skip
          </Button>
          <Button
            rightSection={<IconChevronRight />}
            fullWidth
            color="blue"
            size="lg"
            onClick={() => setCurrent(current + 1)}>
            Done!
          </Button>
        </Button.Group>
      </Modal>
    </div>
  );
};

const WorkoutStats = () => {
  const { width } = useViewportSize();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 space-y-4">
        <Card withBorder shadow="lg" radius={"sm"}>
          <div className="relative">
            <DonutChart
              data={[
                { name: "Expended", value: 400, color: "indigo.6" },
                { name: "Remaining", value: 200, color: "gray.2" },
              ]}
              size={width / 2 - 72}
              thickness={7}
            />

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Text c="dimmed" fz="sm">
                kcals
              </Text>
              <Title order={3}>340</Title>
            </div>
          </div>
        </Card>
        <Card withBorder shadow="lg" radius={"sm"}>
          <Text c="dimmed" fz="sm">
            Distance covered
          </Text>

          <Progress.Root size="xl" className="mt-3">
            <Progress.Section value={35} color="indigo"></Progress.Section>
          </Progress.Root>

          <p className="mt-1">
            400m <span className="text-gray-400">/ 2500m</span>
          </p>
        </Card>
      </div>
      <div className="col-span-1 space-y-4">
        <Card withBorder shadow="lg" radius={"sm"}>
          <Text c="dimmed" fz="sm">
            Workout time
          </Text>

          <Title className="text-left pt-6" order={3}>
            2h 30m
          </Title>
        </Card>

        <Card withBorder shadow="lg" radius={"sm"}>
          <div className="relative">
            <DonutChart
              data={[
                { name: "Expended", value: 400, color: "indigo.6" },
                { name: "Remaining", value: 200, color: "gray.2" },
              ]}
              size={width / 2 - 72}
              thickness={7}
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Title order={3}>78%</Title>
              <Text c="dimmed" fz="sm">
                Complete
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Set = ({ set }) => {
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex space-x-3">
          <div className="flex space-x-1 mt-3">
            {set?.focus?.map((el) => (
              <Badge
                radius={32}
                color={
                  el == "Speed"
                    ? "purple"
                    : el == "Endurance"
                    ? "yellow"
                    : el == "Technique"
                    ? "orange"
                    : el == "Kicks"
                    ? "cyan"
                    : el == "Pulls"
                    ? "magenta"
                    : el == "Breathing" && "green"
                }></Badge>
            ))}
          </div>

          <div>
            <p className="font-medium h-[20px]">
              {set?.count} x {set?.distance}
            </p>
            <p className="text-gray-500 text-[0.9rem]">{set?.name}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          {set?.timeLimit && (
            <Button
              color="gray"
              style={{ padding: 0 }}
              leftSection={<IconClock size={16} />}
              variant="subtle">
              {set?.timeLimit}
            </Button>
          )}
          {set?.done && (
            <Button
              color="green"
              style={{ marginTop: 6 }}
              radius={24}
              w={24}
              h={24}
              p={0}>
              <IconCheck size={16} />
            </Button>
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};
