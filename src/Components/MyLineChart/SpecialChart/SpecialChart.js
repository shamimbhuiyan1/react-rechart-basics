import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          //ekhane jeheto orthat api te kno number nai se jonno obeject er jekhene number ache ta (-)split kre doita object vaklue create kora hpoiche
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
        console.log(phones);
      });
  }, []);
  return (
    <BarChart width={800} height={400} data={phones}>
      <Bar dataKey="value" fill="#8884d8" />
      <Legend />
      <XAxis dataKey="name"></XAxis>
      <YAxis dataKey=""></YAxis>
      <Tooltip />
    </BarChart>
  );
};

export default SpecialChart;
