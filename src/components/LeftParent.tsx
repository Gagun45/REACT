import {LeftChild} from "./LeftChild.tsx";

export const LeftParent = () => {
    return (
        <div>
            <p>left parent</p>
            <LeftChild />
        </div>
    );
};