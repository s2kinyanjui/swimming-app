import Header from "@/components/Header";
import TodayWorkout from "@/components/TodayWorkout";
import { Tabs } from "@mantine/core";
import classes from "../styles/Tabs.module.css";
import MySpeciality from "@/components/MySpeciality";
import Meets from "@/components/Meets";
import Times from "@/components/Times";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-8">
        <Tabs variant="unstyled" defaultValue="swimming" classNames={classes}>
          <Tabs.List grow>
            <Tabs.Tab value="swimming">Swimming</Tabs.Tab>
            <Tabs.Tab value="drylands">Dry lands</Tabs.Tab>
            <Tabs.Tab value="gym">Gym</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="swimming">
            <div className="space-y-4 my-6">
              <TodayWorkout />

              <MySpeciality />

              <Meets />

              <Times />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="drylands">Drylands</Tabs.Panel>
          <Tabs.Panel value="gym">Gym</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
