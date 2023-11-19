import { useEffect } from "react"
function useLocalStorage(key: string, item: string) {
    const getData = localStorage.getItem('dsata') || '{}';
    console.log(JSON.parse(getData))
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(item))
    },[item, key])
}

export default useLocalStorage