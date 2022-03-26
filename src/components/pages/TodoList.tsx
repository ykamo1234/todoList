/* eslint-disable react-hooks/exhaustive-deps */

import { Input, Button } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/layout"
import { Box } from "@mui/material"

import { ChangeEvent, useState } from "react"
import styled from "styled-components";
import { useTodoList } from "../../hooks/useTodoList";

export const TodoList = () => {
    const [todos, setTodos] = useState<string>("");
    const { todoList, addTodo, deleteTodo } = useTodoList();

    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => setTodos(e.target.value);

    const onClickAddTodo = () => {
        addTodo(todos);
        setTodos("");
    }

    const onClickDelete = (index: number) => {
        deleteTodo(index);
    }

    return (
        <SBody>
            <h1 style={{ marginBottom: "12px" }}>簡単メモアプリ</h1>
            <Stack spacing={25} direction="row" align="center">
                <Input placeholder="Write TODO" value={todos} onChange={onChangeTodo} />
                <Button px={5} borderRadius="5" variant="outlined" onClick={onClickAddTodo}>追加</Button>
            </Stack>
            <Stack spacing={4} direction="row" align="center">
                <Box sx={{ margin: 1, border: 2, borderColor: "#9e9e9e", width: "95%", height: "30%", padding: "24px" }}>
                    メモ一覧
                    {todoList && todoList.map((todo, index) => (
                        <>
                            <div>
                                ・{todo}
                                <Button px={5} borderRadius="5" margin="10" variant="outlined" onClick={() => onClickDelete(index)}>削除</Button>
                            </div>
                        </>
                    ))}
                </Box>
            </Stack>
        </SBody>
    )
}

const SBody = styled.body`
    margin: 8px;
`