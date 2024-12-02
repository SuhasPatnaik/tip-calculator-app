export default function MiniForm({
  inputLabel,
  inputIcon,
  inputValue,
  handleChange,
}) {
  const acceptableInput = inputValue > 0 || !inputValue;

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <label className="text-sm">{inputLabel}</label>
          {!acceptableInput ? (
            <ErroroneousInputLabel inputValue={inputValue} />
          ) : null}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
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

function ErroroneousInputLabel({ inputValue }) {
  return (
    <>
      {inputValue == 0 ? (
        <p className="text-xsm text-red-500 lg:self-end">Can't be zero</p>
      ) : inputValue < 0 ? (
        <p className="text-xsm text-red-500 lg:self-end">Can't be negative</p>
      ) : (
        <p className="text-xsm text-red-500 lg:self-end">
          Can't be character(s)
        </p>
      )}
    </>
  );
}
