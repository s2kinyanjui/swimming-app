import { RadarChart } from "@mantine/charts";
import { Title } from "@mantine/core";
import React from "react";

function MySpeciality() {
  return (
    <div>
      <Title className="text-left" order={4}>
        My speciality
      </Title>
      <br />
      <RadarChart
        h={300}
        data={[
          { stroke: "FLY", rank: 10 },
          { stroke: "FREE", rank: 7 },
          { stroke: "BACK", rank: 3 },
          {
            stroke: "BREAST",
            rank: 1,
          },
          {
            stroke: "IM",
            rank: 6,
          },
        ]}
        dataKey="stroke"
        series={[{ name: "rank", color: "blue.4", opacity: 0.9 }]}
      />
    </div>
  );
}

export default MySpeciality;
