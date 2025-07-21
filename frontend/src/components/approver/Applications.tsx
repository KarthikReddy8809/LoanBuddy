import {Eye} from "lucide-react"
import {Card,CardContent,CardHeader,CardTitle} from "../ui/card"
import { Badge } from "../ui/badge"
import {Button} from "../ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table"

const mockApplications=[
    {
        applicationId:"LA001",
        student:"smith",
        course:"Master of Science in Computer Science",
        loanAmount:"$45000",
        familyIncome:"$50000",
        gpa:"3.8",
        status:"Approved",
        
    },
    {
        applicationId:"LA002",
        student:"John Doe",
        course:"Master of Science in Computer Science",
        loanAmount:"$32000",
        familyIncome:"$50000",
        gpa:"3.8",
        status:"Rejected",
        
    },
    {
        applicationId:"LA003",
        student:"Alex carey",
        course:"Master of Science in Computer Science",
        loanAmount:"$45000",
        familyIncome:"$50000",
        gpa:"3.8",
        status:"Pending",
        
    },
]
  



const Applications=()=>{
    return(
        <>
        <Card className="mx-8 border border-b-1 shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">Loan Applications</CardTitle>
            </CardHeader>
            <CardContent>
            <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Application ID</TableHead>
      <TableHead>Student</TableHead>
      <TableHead>Course</TableHead>
      <TableHead>LoanAmount</TableHead>
      <TableHead>Family Income</TableHead>
      <TableHead>GPA</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {mockApplications.map((application,index)=>(
    <TableRow key={index}>
      <TableCell>{application.applicationId}</TableCell>
      <TableCell>{application.student}</TableCell>
      <TableCell>{application.course}</TableCell>
      <TableCell>{application.loanAmount}</TableCell>
      <TableCell>{application.familyIncome}</TableCell>
      <TableCell>{application.gpa}</TableCell>
      <TableCell><Badge variant="default">{application.status}</Badge></TableCell>
      <TableCell>
        <Button className="bg-muted border text-black hover:bg-muted/10 hover:cursor-pointer"><Eye/></Button>
      </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
            </CardContent>
        </Card>
    </>
    )
}

export default Applications