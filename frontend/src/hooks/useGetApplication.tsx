import {useQuery} from "@tanstack/react-query"
import {loanApplication} from "../api/loanApplication"

export const useGetApplication = () => {
    const token=localStorage.getItem("token")
    const {data,error,isLoading}=useQuery({
        queryKey:["loans"],
        queryFn:async()=>loanApplication(token as string)
    })
    return {data,error,isLoading}
}