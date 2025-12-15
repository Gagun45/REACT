import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const RightChild = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <div>

        <p>
            right child
        </p>


            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};