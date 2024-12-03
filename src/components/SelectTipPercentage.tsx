import { useState, useRef, useEffect } from "react";

const presetTipPercentages = [5, 10, 15, 25, 50];

type SelectTipPercentageProps = {
  onTipPercentage: (percent: number) => void;
};

export default function SelectTipPercentage({
  onTipPercentage,
}: SelectTipPercentageProps) {
  const [isCustomClicked, setIsCustomClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCustomClicked) {
      inputRef.current?.focus();
    }
  }, [isCustomClicked]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm">Select Tip %</p>
          <p className="text-xsm text-neutral-400">(Default 20%)</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {presetTipPercentages.map((tipPercent, index) => (
            <button
              key={index}
              className="bg-neutral-600 rounded-[0.5rem] p-2 text-neutral-100 hover:bg-primary-100 hover:text-neutral-600"
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
              ref={inputRef}
              className="text-right pr-4 bg-neutral-200 text-neutral-600 rounded-[0.5rem] focus:outline-none focus:border-primary-100 focus:border-2"
              onChange={(e) => {
                onTipPercentage(Number(e.target.value) / 100);
              }}
            />
          ) : (
            <button
              className="bg-neutral-200 rounded-[0.5rem] p-2"
              onClick={() => setIsCustomClicked(true)}
            >
              Custom
            </button>
          )}
        </div>
      </div>
    </>
  );
}
