import { useEffect } from "react"
function useLocalStorage(key: string, item: string) {
    // alert(key)
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(item))
    },[item, key])
}

export default useLocalStorage