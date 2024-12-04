import { useState } from "react";
import ErroneousInputLabel from "./ErroneousInputLabel";

type MiniFormProps = {
  inputLabel: string;
  inputIcon: string;
  handleChange: (inputValue: number) => void;
};

export default function MiniForm({
  inputLabel,
  inputIcon,
  handleChange,
}: MiniFormProps) {
  const [rawInputValue, setRawInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRawInputValue(value);

    // Allow only valid numeric input
    if (!isNaN(Number(value)) && value.trim() !== "") {
      handleChange(Number(value)); // Update numeric state
    } else if (value === "") {
      handleChange(0); // Reset to 0 for empty input
    }
  };

  const acceptableInput = Number(rawInputValue) > 0 || !rawInputValue;

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <label className="text-sm">{inputLabel}</label>
          {!acceptableInput && (
            <ErroneousInputLabel rawInputValue={rawInputValue} />
          )}
        </div>
        <input
          type="text"
          value={rawInputValue}
          onChange={(e) => handleInputChange(e)}
          style={{
            backgroundImage: `url(${inputIcon})`,
            backgroundPosition: "1rem",
          }}
          className={`px-4 bg-no-repeat text-right h-12 bg-neutral-200 text-neutral-600 rounded-[0.5rem] focus:outline-none focus:border-2 ${
            acceptableInput
              ? "focus:border-primary-100"
              : "focus:border-red-500"
          }`}
        />
      </div>
    </>
  );
}
