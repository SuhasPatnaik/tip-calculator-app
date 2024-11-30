import { useState } from "react";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

export default function App() {
  const [billAmount, setBillAmount] = useState(100);
  const [numberOfPeople, setNumberOfPeople] = useState(5);
  const [tipPercentage, setTipPercentage] = useState(0.15);

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
        <SelectTipPercentage />
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

function Logo() {
  return <img src="/logo.svg" alt="Splitter App Logo" />;
}

function MiniForm({ inputLabel, inputIcon, inputValue, handleChange }) {
  return (
    <>
      <div className="flex flex-col">
        <label>{inputLabel}</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          style={{
            backgroundImage: `url(${inputIcon})`,
            backgroundPosition: "1rem",
          }}
          className="px-4 bg-no-repeat bg-left bg-center text-right h-12"
        />
      </div>
    </>
  );
}

function SelectTipPercentage() {
  const [isCustomClicked, setIsCustomClicked] = useState(false);
  const [customTip, setCustomTip] = useState();

  return (
    <>
      <p>Select Tip %</p>
      <div id="selectTipSection" className="grid grid-cols-2  gap-4">
        <button className="bg-neutral-600">5%</button>
        <button className="bg-neutral-600">10%</button>
        <button className="bg-neutral-600">15%</button>
        <button className="bg-neutral-600">25%</button>
        <button className="bg-neutral-600">50%</button>
        {isCustomClicked ? (
          <input
            type="text"
            className="text-right"
            value={customTip}
            onChange={(e) => setCustomTip(Number(e.target.value))}
          />
        ) : (
          <button
            className="bg-neutral-600"
            onClick={() => setIsCustomClicked(!isCustomClicked)}
          >
            Custom
          </button>
        )}
      </div>
    </>
  );
}

function TipResults({ billValue, headcount, tipPercent }) {
  const totalTip = (billValue * tipPercent).toFixed(2);
  const tipPerHead = (totalTip / headcount).toFixed(2);

  return (
    <>
      <div className="bg-neutral-600 grid grid-rows-3">
        <div className="grid grid-rows-2 grid-cols-2">
          <p>Tip Amount</p>
          <p className="row-span-2 text-[2rem] justify-self-end">
            ${tipPerHead}
          </p>
          <p>/ person</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2">
          <p>Total</p>
          <p className="row-span-2 text-[2rem] justify-self-end">${totalTip}</p>
          <p>/ person</p>
        </div>
        <button className="bg-primary-100">RESET</button>
      </div>
    </>
  );
}
