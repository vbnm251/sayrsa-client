import { useContext } from "react"
import { RootStoreContext} from "../context"

export const useStores = () => {
    const ctx = useContext(RootStoreContext)

    if (ctx === null) {
        throw new Error('empy context')
    }

    return ctx;
}