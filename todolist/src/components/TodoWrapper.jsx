import React, { useState } from 'react';
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm.jsx';

uuidv4();

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([])

    const addToDo = toDo => {
        setToDos([...toDos, {
            id: uuidv4(),
            task: toDo,
            completed: false,
            isEditing: false
        }]);

        console.log(toDos);
    }

    const toggleComplete = id => {
        setToDos(toDos.map(todo => todo.id === id ? {...
        todo, completed: !todo.completed} : todo ))
    }

    const deleteToDo = id => {
        setToDos(toDos.filter(todo => todo.id !== id))
    }

    const editToDo = id => {
        setToDos(toDos.map((todo) => todo.id === id ? {...
            todo, isEditing: !todo.isEditing} : todo));
    }

    const editTask = id => {
        setToDos(toDos.map(todo => todo.id === id ? {...
            todo, task, isEditing: !todo.isEditing} : todo));
    }

    return (
        <div className="TodoWrapper">
            <h1>To Do List</h1>
            <TodoForm addToDo={addToDo} />
            {toDos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm
                        editToDo={editTask}
                        task={todo}
                        key={todo.id}
                    />
                ) : (
                    <Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                    />
                )
            ))}
        </div>
    )
}