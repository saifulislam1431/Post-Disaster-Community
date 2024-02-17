import { Dispatch, SetStateAction } from "react"

export type TSort = { 
    sort: string, 
    setSort: Dispatch<SetStateAction<string>>
 }