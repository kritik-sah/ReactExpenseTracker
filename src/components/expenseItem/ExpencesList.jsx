import ExpenseItem from './ExpenseItem';
const ExpencesList = (props) => {
    const filter = props.filter;
    let expensesContent = <p className="text-lg font-bold text-center">No expenses found.</p>;

    if (filter.length > 0) {
        expensesContent = filter.map((expenseItemData) => (
            <ExpenseItem key={expenseItemData.id} data={expenseItemData} />
        ));
      }
    return (
        <ol className="list-none space-y-2">
            {expensesContent}
        </ol>
    )
}

export default ExpencesList
