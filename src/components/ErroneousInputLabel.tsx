type ErroneousInputLabelProps = {
  inputValue: number;
};

export default function ErroneousInputLabel({
  inputValue,
}: ErroneousInputLabelProps) {
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
