import { useState } from "react";

export default initialValue => {
    const [line, setLine] = useState(initialValue);

    return {
        line,
        addLine: lineText => {
            setLine([...line, lineText]);
        },
        deleteLines: lineIndex => {
            const newLines = line.filter((_, index) => index !== lineIndex);

            setLine(newLines);
        }
    };
};
