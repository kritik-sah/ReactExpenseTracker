const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
      props.onChangeFilter(event.target.value);
    };

    return (
        <div className='p-1'>
            <div className='flex w-full items-center justify-between my-4'>
                <label className="font-bold mb-2">Filter by year</label>
                <select className="py-2 px-12 font-bold rounded-lg" value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='all'>ALL</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter
