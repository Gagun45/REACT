import {useEffect, useState} from "react";
import type {ITodo} from "../../models/TodoModel.ts";
import {getTodos} from "../../services/api.service.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const todosArray = await getTodos()
            setTodos(todosArray);
        }
        fetchData();
    },[])
    return (
        <ul className="bg-slate-400  space-y-2 p-4">
            {todos.map((todo,index)=><TodoComponent key={index} todo={todo}/>)}
        </ul>
    );
};

export default TodosComponent;