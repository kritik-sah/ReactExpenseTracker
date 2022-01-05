const ExpenseDate = (props) => {
  return (
    <div
      className="p-2 m-2 border-2 border-solid w-3/12 
        border-fuchsia-200 rounded-lg bg-fuchsia-300 hover:bg-fuchsia-400 shadow-md"
    >
      <div className="m-auto text-xl font-bold text-fuchsia-700 text-center">
        {props.date.toLocaleString("en-us", { month: "short" })}
      </div>
      <div className="m-auto text-base font-base text-fuchsia-700 text-center">
        {props.date.getFullYear()}
      </div>
      <div className="m-auto text-3xl font-black text-fuchsia-700 text-center">
        {props.date.toLocaleString("en-us", { day: "2-digit" })}
      </div>
    </div>
  );
};

export default ExpenseDate;
