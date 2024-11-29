import { useState } from "react";
import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

export default function App() {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <Logo />
      </div>
      <div>
        <MiniForm inputLabel="Bill" inputIcon={dollarIcon} />
      </div>
      <div>
        <SelectTipPercentage />
      </div>
      <div>
        <MiniForm inputLabel="Number of People" inputIcon={personIcon} />
      </div>
      <div>
        <TipResults />
      </div>
    </>
  );
}

function Logo() {
  return <img src="/logo.svg" alt="Splitter App Logo" />;
}

function MiniForm({ inputLabel, inputIcon }) {
  return (
    <>
      <div className="flex flex-col">
        <label>{inputLabel}</label>
        <input
          type="text"
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

  const handleCustomClick = () => {};

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
          <input type="text" />
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

function TipResults() {
  return (
    <>
      <div className="bg-neutral-600 grid grid-rows-3">
        <div className="grid grid-rows-2 grid-cols-2">
          <p>Tip Amount</p>
          <p className="row-span-2 text-[2rem] justify-self-end">$4.27</p>
          <p>/ person</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2">
          <p>Total</p>
          <p className="row-span-2 text-[2rem] justify-self-end">$32.79</p>
          <p>/ person</p>
        </div>
        <button className="bg-primary-100">RESET</button>
      </div>
    </>
  );
}
