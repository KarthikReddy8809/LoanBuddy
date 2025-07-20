import MetricCard from "./MetricCard"
import { BadgeDollarSign, CheckCircle, CircleX, Clock, DollarSign, Plus, X } from "lucide-react"
import { Button } from "./ui/button"
import Header from "./Header"

const StudentDashBoard = () => {
    return (
        <div className="flex flex-col gap-8">
            <Header/>
            <div className="flex flex-row justify-between">
            <div className="flex flex-col ml-7">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <p className="text-muted-foreground">Manage your education financial applications</p>
            </div>
            <Button className="bg-blue-500 text-white mr-10" size="lg"><Plus/>New Application</Button>
            </div>
            <div className="flex flex-row justify-evenly">
            <MetricCard title="Total Applications" value="2" variant="default" icon={DollarSign} description="Lifetime applications submitted"/>
            <MetricCard title="Approved" value="2" variant="success" icon={CheckCircle} description="Applications approved"/>
            <MetricCard title="Pending" value="2" variant="warning" icon={Clock} description="Under review"/>
            <MetricCard title="Rejected" value="2" variant="primary" icon={CircleX} description="Applications declined"/>
            </div>
            <h1>StudentDashBoard</h1>
        </div>
    )
}

export default StudentDashBoard