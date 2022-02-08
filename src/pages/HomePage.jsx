import React from 'react';
import {useHistory} from "react-router";

export const HomePage = () => {
    const history = useHistory()

    const func = () => {
      history.push("/todolist")
    }
    return (
        <div>
            <h1>Home Page</h1>
            <h2 onClick={() => func("/todolist")} style={{ cursor: "pointer" }}>
                todolist
            </h2>
        </div>
    );
};

