// import {useState} from 'react';
import Card from "../lib/Card";
import ExpenseDate from "./ExpenseDate";
// import { MdCreate } from "react-icons/md";

const ExpenseItem = (props) => {
   const { title, amount, date} = props.data;
  // const [itemTitle, setItemTitle] = useState(title);
  // const [amount, setAmount] = useState(props.amount);
  // const [date, setDate] = useState(props.date);

  // const editHandler = () =>{
  //     setItemTitle("Updated!");
  //     // setAmount("123");
  //     // setDate("Updated!");
  //     console.log("edit was clicked")
  // }
//   tailwindCss style classes in variable iconStyles
  // const iconStyles = 'mt-2 md:m-3 p-2 md:p-3 h-8 md:h-10 w-8 md:w-10 rounded-full bg-fuchsia-400 hover:bg-fuchsia-100 shadow-sm shadow-fuchsia-400 text-xl text-fuchsia-50 hover:text-fuchsia-700 '

  return (
    <li>
    <Card
      className="w-full border-2 border-solid border-fuchsia-100 bg-fuchsia-800 "
    >
      <div className="flex justify-between items-center">
        <ExpenseDate date={date} />

        <div className="flex w-5/12 mx-2 my-4 items-center">
          <h2 className="text-base md:text-lg font-bold text-fuchsia-100">
            {title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row w-4/12 md:justify-end mx-2 md:items-center">
          <div className="text-xl font-bold text-fuchsia-400 bg-fuchsia-100 border-2 border-dashed p-2 rounded-lg border-fuchsia-400">
            ${amount}
          </div>
          {/* <div className="flex space-x-1 items-center" >
            <MdCreate onClick={editHandler} className={iconStyles}/>
            <MdCreate onClick={editHandler} className={iconStyles}/>
            <MdCreate onClick={editHandler} className={iconStyles}/>
          </div> */}
        </div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
