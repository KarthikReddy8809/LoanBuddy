import { CircleAlert, CircleCheck, CircleX, LucideFileSpreadsheet } from "lucide-react";
import { useLoanApplications } from "@/hooks/useLoanApplications";
import { useState,useEffect
 } from "react";
 import type {stats} from "../types/type"
import { Card } from "./ui/card";

export default function Stats(){
    const {useGetStats}=useLoanApplications();
    const {data}=useGetStats();
    const [stats,setStats]=useState<stats>();
  
    useEffect(()=>{
        if(data){
            setStats(data);
        }
    },[data])    
    return(
        <div className="flex flex-row items-center justify-between gap-4 ">
           <Card className="w-full max-w-md p-4">
            <div className="flex flex-row items-center justify-between">
            <h1 className="font-semibold">Total Applications</h1>
            <LucideFileSpreadsheet />
            </div>
            <p>{stats?.totalapplications}</p>
           </Card>
            <Card className="w-full max-w-md p-4">
            <div className="flex flex-row items-center justify-between">
            <h1 className="font-semibold">Pending Applications</h1>
            <CircleAlert className="text-orange-300" />
            </div>
            <p>{stats?.pending}</p>
           </Card>
            <Card className="w-full max-w-md p-4">
            <div className="flex flex-row items-center justify-between">
            <h1 className="font-semibold">Approved Applications</h1>
            <CircleCheck className="text-green-600" />
            </div>
            <p>{stats?.approved}</p>
           </Card>
            <Card className="w-full max-w-md p-4">
            <div className="flex flex-row items-center justify-between">
            <h1 className="font-semibold">Rejected Applications</h1>
            <CircleX className="text-red-600"/>
            </div>
            <p>{stats?.rejected}</p>
           </Card>
        </div>
    )
}