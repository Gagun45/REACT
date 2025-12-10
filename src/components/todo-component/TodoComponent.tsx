import type {ITodo} from "../../models/TodoModel.ts";
import type {FC} from "react";

interface TodoComponentProps {
    todo: ITodo
}

const TodoComponent:FC<TodoComponentProps> = ({todo}) => {
    return (
        <li className='border bg-slate-300'>
            {todo.userId} - {todo.id} - {todo.title} - {todo.completed}
        </li>
    );
};

export default TodoComponent;