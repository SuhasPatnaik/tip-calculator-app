import { useState } from "react";

import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

import Logo from "./components/Logo";
import MiniForm from "./components/MiniForm";
import SelectTipPercentage from "./components/SelectTipPercentage";
import TipResults from "./components/TipResults";

const DEFAULT_NUMBER_OF_PEOPLE = 1;
const DEFAULT_TIP_PERCENTAGE = 0.2;

export default function App() {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(
    DEFAULT_NUMBER_OF_PEOPLE
  ); // Default: 1 as we need atleast one person to generate a bill
  const [tipPercentage, setTipPercentage] = useState<number>(
    DEFAULT_TIP_PERCENTAGE
  ); // Default: 20% is the generally accepted tip % in the US

  const handleReset = () => {
    setBillAmount(0);
    setNumberOfPeople(1);
    setTipPercentage(0.2);
  };

  return (
    <>
      <div className="mt-12 flex justify-center 2xl:mt-24">
        <Logo />
      </div>
      <div className="bg-neutral-100 mt-12 p-8 rounded-t-[1.5rem] flex flex-col gap-8 lg:max-w-[60vw] lg:mx-auto lg:grid lg:grid-cols-2 lg:rounded-[1.5rem] 2xl:mt-24">
        <div className="grid gap-y-6">
          <MiniForm
            inputLabel="Bill"
            inputIcon={dollarIcon}
            inputValue={billAmount}
            handleChange={(value: number) => setBillAmount(value)}
          />
          <SelectTipPercentage onTipPercentage={setTipPercentage} />
          <MiniForm
            inputLabel="Number of People"
            inputIcon={personIcon}
            inputValue={numberOfPeople}
            handleChange={(value: number) => setNumberOfPeople(value)}
          />
        </div>
        <div>
          <TipResults
            billValue={billAmount}
            headcount={numberOfPeople}
            tipPercent={tipPercentage}
            onReset={handleReset}
          />
        </div>
      </div>
    </>
  );
}
