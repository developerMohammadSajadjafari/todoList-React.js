import { useEffect, useRef, useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const changeHandeler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) {
            alert('enter todo !');
            return;
        }
        props.submitTodo(input);
        setInput('');
        //* add entered todo to todos
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <input type="text" value={input} onChange={changeHandeler} placeholder={props.edit ? 'updatedTodo' : 'addTodo'} ref={inputRef} />
                <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">
                    {props.edit ? 'update' : 'add'}
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
