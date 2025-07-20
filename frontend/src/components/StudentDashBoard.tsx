import { useState } from "react"
import MetricCard from "./MetricCard"
import { CheckCircle, CircleX, Clock, DollarSign, Plus } from "lucide-react"
import Applications from "./Applications"
import { Button } from "./ui/button"
import Header from "./Header"
import { Dialog, DialogTrigger } from "./ui/dialog"
import ApplicationForm from "./ApplicationForm"

const StudentDashBoard = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col ml-7">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Manage your education financial applications
          </p>
        </div>
        <Dialog open={show} onOpenChange={setShow} >
          <DialogTrigger asChild>
            <Button className="bg-blue-500 text-white mr-10 hover:bg-blue-600" size="lg">
              <Plus /> New Application
            </Button>
          </DialogTrigger>
          <ApplicationForm />
        </Dialog>
      </div>

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

export default StudentDashBoard
