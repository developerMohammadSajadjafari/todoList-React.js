import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import NavBar from './NavBar';

const TodoApp = () => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterTodos(selectedOption.value);
    }, [todos , selectedOption]);

    const addTodo = (input) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000) * 999,
            text: input,
            isCompleted: false,
        };

        setTodos([...todos, newTodo]);
    };
    const completeTodo = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);

        // console.log(id , index)

        const selectedTodo = { ...todos[index] };

        // console.log(selectedTodo)

        selectedTodo.isCompleted = !selectedTodo.isCompleted;

        const uppatedTodos = [...todos];

        uppatedTodos[index] = selectedTodo;

        setTodos(uppatedTodos);
    };

    const removeTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);

        setTodos(filteredTodos);
    };

    const updatedTodo = (id, newValue) => {
        const index = todos.findIndex((todo) => todo.id === id);

        // console.log(id , index)

        const selectedTodo = { ...todos[index] };

        // console.log(selectedTodo)

        selectedTodo.text = newValue;

        const uppatedTodos = [...todos];

        uppatedTodos[index] = selectedTodo;

        setTodos(uppatedTodos);
    };

    const filterTodos = (status) => {
        console.log(status);
        switch (status) {
            case 'Completed': {
                const filteredNewTodos = todos.filter((todo) => todo.isCompleted);

                return setFilteredTodos(filteredNewTodos);
            }
            case 'unCompleted': {
                const filteredNewTodos2 = todos.filter((todo) => !todo.isCompleted);

                return setFilteredTodos(filteredNewTodos2);
            }
            default:
                setFilteredTodos(todos);
        }
    };

    const selectHandler = (e) => {
        setSelectedOption(e);
        filterTodos(e.value);
    };

    return (
        <>
            <NavBar unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length} selectedOption={selectedOption} onChange={selectHandler} />
            <TodoForm submitTodo={addTodo} />
            <TodoList todos={filteredTodos} onComplete={completeTodo} onDelete={removeTodo} onUpdateTodo={updatedTodo} />
        </>
    );
};

export default TodoApp;
