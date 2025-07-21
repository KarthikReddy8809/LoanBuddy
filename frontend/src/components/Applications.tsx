import { Calendar, DollarSign, GraduationCap } from "lucide-react"
import {Card,CardContent,CardHeader,CardTitle,CardDescription} from "./ui/card"
import { Badge } from "./ui/badge"
import {useGetApplication} from "../hooks/useGetApplication"


const statusToVariant = (status: string): 
  "default" | "secondary" | "success" | "warning" | "destructive" => {
  switch (status.toLowerCase()) {
    case "approved":
      return "success";
    case "pending":
      return "warning";
    case "rejected":
      return "destructive";
    default:
      return "default";
  }
};

const Applications=()=>{
    const {data:mockApplications,error,isLoading}=useGetApplication()
    return(
        <>
        <Card className="mx-8 border border-b-1 shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">Your Applications</CardTitle>
            </CardHeader>
            <CardContent>
            {mockApplications?.map((application:any,index:any)=>(
                <Card key={index} className="my-4 hover:shadow-lg hover:cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex flex-row justify-start gap-2 items-center">
                            {application.title}
                            <Badge  variant="default">{application.status}</Badge>
                            </CardTitle>
                        <CardDescription className="flex flex-row justify-start items-center gap-4">
                            <div className="flex flex-row gap-1 items-center my-2">
                            <DollarSign className="w-4 h-4"/>
                            <p className="text-black">{application.amount}</p>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                            <GraduationCap className="w-4 h-4"/>
                            <p className="text-md">{application.university}</p>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                            <Calendar className="w-4 h-4"/>
                            <p>{application.date}</p>
                            </div>
                            
                        </CardDescription>
                        <p><span className="text-muted-foreground">Course:</span>{application.course}</p>
                    </CardHeader>
                </Card>
            ))}
            </CardContent>
        </Card>
    </>
    )
}

export default Applications