import type {FC, ReactNode} from "react";

type PropsType = {
    children: ReactNode;
}

const CharacterComponent:FC<PropsType> = ({children}) => {
    return (
        <li className='border'>
            {children}
        </li>
    );
};

export default CharacterComponent;