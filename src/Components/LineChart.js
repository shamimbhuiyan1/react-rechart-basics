import React from "react";
import { CartesianGrid, Line, Tooltip, XAxis, YAxis } from "recharts";

const LineChart = () => {
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
  ];
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="price" />
      <YAxis />
      <Tooltip />

      <Line type="monotone" dataKey={"price"} stroke="#8884d8" />
      <Line type="monotone" dataKey={"pv"} stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChart;
