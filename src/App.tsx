import dollarIcon from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";

export default function App() {
  return (
    <>
      <div className="mt-12">
        <Logo />
      </div>
      <div>
        <MiniForm inputLabel="Bill" inputIcon={dollarIcon} />
      </div>
      <div>
        <MiniForm inputLabel="Number of People" inputIcon={personIcon} />
      </div>
    </>
  );
}

function Logo() {
  return <img src="/logo.svg" alt="Splitter App Logo" />;
}

function MiniForm({ inputLabel, inputIcon }) {
  return (
    <>
      <div className="flex flex-col">
        <label>{inputLabel}</label>
        <input
          type="text"
          style={{
            backgroundImage: `url(${inputIcon})`,
          }}
          className="p-2 bg-no-repeat bg-left bg-center text-right h-16"
        />
      </div>
    </>
  );
}
