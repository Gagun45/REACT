import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = +(query.get('page') || '1')
    const onNextPage = () => {
        setQuery({page: (page + 1).toString()})
    }
    const onPrevPage = () => {
        if (page > 1) {
            setQuery({page: (page - 1).toString()})
        }
    }
    return (
        <div className="flex justify-center gap-2">
            <button onClick={onPrevPage}>prev</button>
            <button onClick={onNextPage}>next</button>
        </div>
    );
};