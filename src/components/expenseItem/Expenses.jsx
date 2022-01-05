import { useState } from 'react';

import Card from '../lib/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpencesList from './ExpencesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
    const expense = props.items;


    const [filteredYear, setFilteredYear] = useState('all');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expense.filter((expense) => {
        if (filteredYear === 'all') {
            return true;
        }
        return expense.date.getFullYear().toString() === filteredYear;

    });



    return (
        <div>
            <Card className="bg-fuchsia-300 py-2 my-4 space-y-2 mx-1 px-1">
                <ExpensesChart expenses={filteredExpenses} />
            </Card>
            <Card className='py-4 px-2 my-2 mx-auto'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpencesList filter={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses
