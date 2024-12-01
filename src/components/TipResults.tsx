export default function TipResults({ billValue, headcount, tipPercent }) {
  const totalTip = parseFloat((billValue * tipPercent).toFixed(2));
  const tipPerHead = parseFloat((totalTip / headcount).toFixed(2));

  return (
    <>
      <div className="bg-neutral-600 grid grid-rows-3 gap-y-6 px-6 pt-8 pb-6 rounded-[0.75rem]">
        <div className="grid grid-rows-2 grid-cols-2">
          <p className="text-sm text-neutral-100">Tip Amount</p>
          <p className="row-span-2 text-[2rem] text-primary-100 justify-self-end">
            ${Number.isNaN(tipPerHead) ? 0 : tipPerHead}
          </p>
          <p className="text-xsm text-neutral-400">/ person</p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2">
          <p className="text-sm text-neutral-100">Total</p>
          <p className="row-span-2 text-[2rem] text-primary-100 justify-self-end">
            ${Number.isNaN(totalTip) ? 0 : totalTip}
          </p>
          <p className="text-xsm text-neutral-400">/ person</p>
        </div>
        <button className="bg-primary-100 text-neutral-600 text-[1.25rem] rounded-[0.25rem] hover:bg-neutral-300">
          RESET
        </button>
      </div>
    </>
  );
}
