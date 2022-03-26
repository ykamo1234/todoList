import { useState } from "react"

export const useTodoList = () => {
    const [todoList, setTodoList] = useState<string[]>([]);

    const addTodo = (todo:string) => {
        const newList = [...todoList, todo];
        setTodoList(newList);
    }

    const deleteTodo = (index:number) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    return { todoList, addTodo, deleteTodo}
}