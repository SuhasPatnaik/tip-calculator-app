export default function TipResults({ billValue, headcount, tipPercent }) {
  const totalTip = parseFloat((billValue * tipPercent).toFixed(2));
  const tipPerHead = parseFloat((totalTip / headcount).toFixed(2));

  return (
    <>
      <div className="bg-neutral-600 grid grid-rows-3">
        <div className="grid grid-rows-2 grid-cols-2">
          <p>Tip Amount</p>
          <p className="row-span-2 text-[2rem] justify-self-end">
            ${Number.isNaN(tipPerHead) ? 0 : tipPerHead}
          </p>
          <p>/ person</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2">
          <p>Total</p>
          <p className="row-span-2 text-[2rem] justify-self-end">
            ${Number.isNaN(totalTip) ? 0 : totalTip}
          </p>
          <p>/ person</p>
        </div>
        <button className="bg-primary-100">RESET</button>
      </div>
    </>
  );
}
