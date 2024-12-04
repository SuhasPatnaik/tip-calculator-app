type ErroneousInputLabelProps = {
  rawInputValue: string;
};

export default function ErroneousInputLabel({
  rawInputValue,
}: ErroneousInputLabelProps) {
  return (
    <>
      {Number(rawInputValue) == 0 ? (
        <p className="text-xsm text-red-500 lg:self-end">Can't be zero</p>
      ) : Number(rawInputValue) < 0 ? (
        <p className="text-xsm text-red-500 lg:self-end">Can't be negative</p>
      ) : (
        <p className="text-xsm text-red-500 lg:self-end">
          Can't be character(s)
        </p>
      )}
    </>
  );
}
