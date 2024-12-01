export default function MiniForm({
  inputLabel,
  inputIcon,
  inputValue,
  handleChange,
}) {
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
