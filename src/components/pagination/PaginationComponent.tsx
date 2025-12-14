import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({skip: '30'})
    const onChange = (skip: number) => {
        const newSkip = +(query.get('skip') ?? '0') + skip
        setQuery({skip: newSkip.toString()})
    }
    return (
        <div className="flex justify-center gap-2">
            <button onClick={()=>onChange(-30)}>prev</button>
            <button onClick={()=>onChange(+30)}>next</button>
        </div>
    );
};