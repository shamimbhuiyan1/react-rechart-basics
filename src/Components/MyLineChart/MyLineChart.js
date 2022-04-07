import React from "react";
import {
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Supplier A",
      price: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Supplier B",
      price: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Supplier C",
      price: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Supplier D",
      price: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Supplier E",
      price: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Supplier F",
      price: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Supplier G",
      price: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
  return (
    <div>
      <div>
        <LineChart width={800} height={500} data={data}>
          <Line dataKey={"price"}></Line>
          <Line dataKey={"pv"}></Line>
          <Legend />
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey=""></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default MyLineChart;
