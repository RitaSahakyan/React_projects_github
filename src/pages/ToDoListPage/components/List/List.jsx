import React from "react";
import { Styled } from "./List.styled";

export const List = ({ list, del, edit }) => {
    return (
        <Styled.Root>
            {list.map((item, index) => (
                <Styled.Item key={index}>
                    <input type={"checkbox"} />
                    <p>{item}</p>
                    <Styled.EditDel>
                        <span onClick={() => edit(item)}>edit</span>
                        <span onClick={() => del(index)}>del</span>
                    </Styled.EditDel>
                </Styled.Item>
            ))}
        </Styled.Root>
    );
};
