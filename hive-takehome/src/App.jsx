import "./App.css";
import Dropdown from "./component/Dropdown";
import { useState } from "react";

function App() {
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];

  //state for multiple dropdown
  const [isOpenMulti, setIsOpenMulti] = useState(false);
  const [selectedMulti, setSelectedMulti] = useState([]);

  //state for single dropdown
  const [isOpenSingle, setIsOpenSingle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "100vh",
      }}
    >
      <h1>Controlled Dropdown Component</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2>Multi-Select Dropdown</h2>
        <Dropdown
          title="Select Options"
          options={options}
          multiple
          isOpen={isOpenMulti}
          selectedOptions={selectedMulti}
          onToggle={setIsOpenMulti}
          onChange={setSelectedMulti}
        />
      </div>

      <div>
        <h2>Single-Select Dropdown</h2>
        <Dropdown
          title="Select One"
          options={options}
          multiple={false}
          isOpen={isOpenSingle}
          selectedOptions={selectedOption}
          onToggle={setIsOpenSingle}
          onChange={setSelectedOption}
        />
      </div>
    </div>
  );
}

export default App;
