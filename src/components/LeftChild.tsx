import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const LeftChild = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div>

        <p>
            left child
        </p>
            <p className={'border'}>{theme}</p>
        </div>
    );
};