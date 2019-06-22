import React from 'react';

function ToDoItems(props) {
    return (
        <div>
            <div className={props.item.completed ? "todo-class-completed" : "todo-class-todo"}>
                    <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
                    <p>{props.item.name}</p>
                </div>
        </div>
    
    );
}

export default ToDoItems;