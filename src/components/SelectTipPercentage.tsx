import { useState } from "react";

export default function SelectTipPercentage({ onTipPercentage }) {
  const [isCustomClicked, setIsCustomClicked] = useState(false);

  const presetTipPercentages = [5, 10, 15, 25, 50];

  return (
    <>
      <p>Select Tip %</p>
      <p>(Default 20%)</p>
      <div id="selectTipSection" className="grid grid-cols-2  gap-4">
        {presetTipPercentages.map((tipPercent, index) => (
          <button
            key={index}
            className="bg-neutral-600"
            onClick={() => {
              onTipPercentage(tipPercent / 100);
              setIsCustomClicked(false);
            }}
          >
            {tipPercent}%
          </button>
        ))}

        {isCustomClicked ? (
          <input
            type="text"
            className="text-right"
            onChange={(e) => {
              onTipPercentage(Number(e.target.value) / 100);
            }}
          />
        ) : (
          <button
            className="bg-neutral-600"
            onClick={() => setIsCustomClicked(true)}
          >
            Custom
          </button>
        )}
      </div>
    </>
  );
}
