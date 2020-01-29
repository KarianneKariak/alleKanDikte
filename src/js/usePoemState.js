import { useState } from "react";

export default initialValue => {
    const [line, setLine] = useState(initialValue);

    return {
        line,
        addLine: lineText => {
            setLine([...line, lineText]);
        },
        // deleteTodo: todoIndex => {
        //     const newTodos = todos.filter((_, index) => index !== todoIndex);
        //
        //     setTodos(newTodos);
        // }
    };
};
