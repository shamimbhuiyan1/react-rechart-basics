import React from "react";
import { Funnel, FunnelChart, LabelList, Legend, Pie, Tooltip } from "recharts";

const PieChart = () => {
  const data = [
    {
      name: "Supplier A",
      price: 4000,
      pv: 2400,
      amt: 2400,
      fill: "#8884d8",
    },
    {
      name: "Supplier B",
      price: 3000,
      pv: 1398,
      amt: 2210,
      fill: "#83a6ed",
    },
    {
      name: "Supplier C",
      price: 2000,
      pv: 9800,
      amt: 2290,
      fill: "#8dd1e1",
    },
    {
      name: "Supplier D",
      price: 2780,
      pv: 3908,
      amt: 2000,
      fill: "#82ca9d",
    },
    {
      name: "Supplier E",
      price: 1890,
      pv: 4800,
      amt: 2181,
      fill: "#a4de6c",
    },
    {
      name: "Supplier F",
      price: 2390,
      pv: 3800,
      amt: 2500,
      fill: "#8884d8",
    },
    {
      name: "Supplier G",
      price: 3490,
      pv: 4300,
      amt: 2100,
      fill: "#8dd1e1",
    },
  ];
  return (
    <div>
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel dataKey="price" data={data} isAnimationActive>
          <LabelList position="right" fill="" stroke="none" dataKey="name" />
        </Funnel>

        <Legend fill="#8884d8"></Legend>
      </FunnelChart>
    </div>
  );
};

export default PieChart;
