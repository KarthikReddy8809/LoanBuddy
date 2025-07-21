import {Card,CardContent,CardHeader,CardTitle,CardDescription} from "../ui/card"
import Header from "./Header"
import MetricCard from "../MetricCard"
import {DollarSign,CheckCircle,Clock,CircleX} from "lucide-react"
import Applications from "../Applications"

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
          <MetricCard title="Total Applications" value="2" variant="default" icon={DollarSign} description="Lifetime applications submitted" />
          <MetricCard title="Approved" value="2" variant="success" icon={CheckCircle} description="Applications approved" />
          <MetricCard title="Pending" value="2" variant="warning" icon={Clock} description="Under review" />
          <MetricCard title="Rejected" value="2" variant="primary" icon={CircleX} description="Applications declined" />
        </div>
  
        <Applications />
      </div>  
    )

}

export default ApproverDashBoard
