import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Mail,Lock,GraduationCap} from 'lucide-react';

  import { Button } from "@/components/ui/button"
 const LoginForm=()=>{
return(
    <div className="flex flex-col justify-center items-center h-screen gap-4">
    <Card className="w-[500px]">

        <CardHeader>
            <div className="flex flex-col items-center gap-3">
            <GraduationCap className="w-16 h-16 text-blue-500"/>
            <CardTitle className="text-center text-2xl">Student Dashboard</CardTitle>
            </div>
        </CardHeader>
        <CardDescription className="text-center">
            Access your loan application and financial aid
        </CardDescription>
        <CardContent>
            <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="email" className="border border-gray-300 bg-muted rounded-md p-2"/>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" className="border border-gray-300 bg-muted rounded-md p-2"/>
                </div>
            <Button className="w-full bg-blue-500 text-white py-2 rounded-md mt-6">Sign In</Button>
        </CardContent>
        
    </Card>
    </div>
)
}
export default LoginForm