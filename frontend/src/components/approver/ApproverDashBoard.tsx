import {Card,CardContent,CardHeader,CardTitle,CardDescription} from "../ui/card"
import Header from "./Header"
import MetricCard from "../MetricCard"
import {DollarSign,CheckCircle,Clock,CircleX} from "lucide-react"
import Applications from "./Applications"

const ApproverDashBoard=()=>{
    return(
        <div className="flex flex-col gap-8">
        <Header />
        <Card className="mx-8 bg-blue-100 border border-1 border-blue-200">
         <CardHeader>
            <CardTitle className="text-2xl">Welcome Back,Approver</CardTitle>
            <CardDescription>
                Review and manage student loan applications efficiently.Here's your current overview
            </CardDescription>
         </CardHeader>
         <CardContent>
            
         </CardContent> 
        </Card>
  
        <div className="flex flex-row justify-evenly">
          <MetricCard title="Total sanctioned" value="$2450,000" variant="default" icon={DollarSign} description="Total sanctioned" />
          <MetricCard title="Loan Balance" value="$1890,000" variant="default" icon={CheckCircle} description="Loan Balance" />
          <MetricCard title="Pending Applications" value="23" variant="default" icon={Clock} description="Pending Applications" />
          <MetricCard title="Approved Today" value="8" variant="default" icon={CircleX} description="Approved Today" />
        </div>
        <Applications />
      </div>  
    )

}

export default ApproverDashBoard
