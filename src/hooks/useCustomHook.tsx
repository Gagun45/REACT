import {useEffect, useState} from "react";

export const useCustomHook = <T,>(url: string)=>{
    const [state, setState] = useState<T>()
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setState(data)
        }
        fetchData()
    },[url])
    return state
}