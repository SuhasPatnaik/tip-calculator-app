import { useState } from "react";

import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

import Logo from "./components/Logo";
import MiniForm from "./components/MiniForm";
import SelectTipPercentage from "./components/SelectTipPercentage";
import TipResults from "./components/TipResults";

export default function App() {
  const [billAmount, setBillAmount] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState(1); // Default: 1 as we need atleast one person to generate a bill
  const [tipPercentage, setTipPercentage] = useState(0.2); // Default: 20% is the generally accepted tip % in the US

  return (
    <>
      <div className="mt-12 flex justify-center">
        <Logo />
      </div>
      <div>
        <MiniForm
          inputLabel="Bill"
          inputIcon={dollarIcon}
          inputValue={billAmount}
          handleChange={(value) => setBillAmount(value)}
        />
      </div>
      <div>
        <SelectTipPercentage onTipPercentage={setTipPercentage} />
      </div>
      <div>
        <MiniForm
          inputLabel="Number of People"
          inputIcon={personIcon}
          inputValue={numberOfPeople}
          handleChange={(value) => setNumberOfPeople(value)}
        />
      </div>
      <div>
        <TipResults
          billValue={billAmount}
          headcount={numberOfPeople}
          tipPercent={tipPercentage}
        />
      </div>
    </>
  );
}
