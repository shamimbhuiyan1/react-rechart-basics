import "./App.css";
import AreaChart from "./Components/AreaChart";
import LineChart from "./Components/LineChart";
import MyLineChart from "./Components/MyLineChart/MyLineChart";
import SpecialChart from "./Components/MyLineChart/SpecialChart/SpecialChart";
import PieChart from "./Components/PieChart";

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
      <PieChart></PieChart>
    </div>
  );
}

export default App;
