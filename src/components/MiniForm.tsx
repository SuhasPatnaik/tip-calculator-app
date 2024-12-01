export default function MiniForm({
  inputLabel,
  inputIcon,
  inputValue,
  handleChange,
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-sm">{inputLabel}</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          style={{
            backgroundImage: `url(${inputIcon})`,
            backgroundPosition: "1rem",
          }}
          className="px-4 bg-no-repeat text-right h-12 bg-neutral-200 text-neutral-600 rounded-[0.5rem] focus:outline-none focus:ring-0 focus:border-primary-100 focus:border-2"
        />
      </div>
    </>
  );
}
