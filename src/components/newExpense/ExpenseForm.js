import { useState } from "react"

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData ={
            title : title,
            amount : amount,
            date : new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="Exp. Title" value={title} onChange={titleChangeHandler} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Amount</span>
                </label>
                <input type="number" placeholder="Exp. Amount" value={amount} onChange={amountChangeHandler} className="input input-bordered" min="0.01" step="0.01"/>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input type="date" placeholder="Exp. Date" value={date} onChange={dateChangeHandler} className="input input-bordered" min="2019-01-01"/>
            </div>
            <div className="form-control flex-row justify-between mt-2">
                <button type="button" className="inline-block btn btn-outline w-5/12"onClick={props.onCancel}>Cancel</button>
                <button type="submit" className="inline-block btn btn-primary w-5/12">ADD ITEM</button>
            </div>

        </form>
    )
}

export default ExpenseForm
