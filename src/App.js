import {useState} from 'react';
import './App.css';
import Expenses from './components/expenseItem/Expenses';

import Card from './components/lib/Card';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  
  const dummy_expenses = [
    {
      id: 'e1',
      title: 'Cryptolancer.in Domain',
      amount: 94.12,
      date: new Date(2021, 11, 14),
    },
    { id: 'e2', title: 'New Laptop', amount: 799.49, date: new Date(2022, 1, 1) },
    {
      id: 'e3',
      title: 'Bought Crypto',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'College fee',
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
      setExpenses([expense, ...expenses]);
  }

  return (
    <>
    <Card className="bg-fuchsia-400 py-2 my-4 space-y-2 mx-1 px-1">
      <NewExpense onAddExpense={addExpenseHandler}/>
    </Card>

    <Card className="bg-fuchsia-300 py-2 space-y-2 m-1 px-1">
        <Expenses items={expenses}  />
    </Card> 
      
    </>
  );
}

export default App;
