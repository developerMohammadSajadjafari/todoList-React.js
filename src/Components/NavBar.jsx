import { useState } from 'react';
import Select from 'react-select';

const NavBar = ({ unCompletedTodos, onChange  , selectedOption}) => {
    const options = [
        {
            value: 'All',
            label: 'All',
        },
        {
            value: 'unCompleted',
            label: 'unCompleted',
        },
        {
            value: 'Completed',
            label: 'Completed',
        },
    ];

    if (!unCompletedTodos) return <h2 className='h2'>set Your today Todos!</h2>;
    return (
        <header>
            <span>{unCompletedTodos}</span> <h2> are not Completed</h2>
            {/* <select onChange={onSelect} value={status}>
                <option value="All">All</option>
                <option value="unCompleted">unCompleted</option>
                <option value="Completed">Completed</option>
            </select> */}
            <Select className='selectBox' onChange={onChange} value={selectedOption} options={options} />
        </header>
    );
};

export default NavBar;
