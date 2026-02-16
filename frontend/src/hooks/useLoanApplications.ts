import {
  useQuery,
  useMutation,
} from '@tanstack/react-query'

export const useLoanApplications = () =>{
    
    const useGetStats = ()=>{
        return useQuery({
            queryKey: ['stats'],
            queryFn: async () =>{
               const res= await fetch("http://localhost:8080/stats",{
                    method:"GET"
                })
                const data = await res.json();
                return data;
            }
            
        })
    }
    return {
        useGetStats
    }
}