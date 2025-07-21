import {Card,CardContent,CardHeader,CardTitle,CardDescription} from "../ui/card";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ShieldCheck} from "lucide-react";
import {useNavigate} from "@tanstack/react-router";
import {toast} from "sonner"
import {Button} from "../ui/button";
import {Input} from "../ui/input";

const schema=z.object({
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(6,{message:"Password must be at least 6 characters long"}),
  })
type FormData=z.infer<typeof schema>;

const Login=()=>{
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm<FormData>({resolver:zodResolver(schema)})
    const onSubmit=async(data:FormData)=>{
        console.log(data);
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen gap-4">
    <Card className="w-[500px] border  shadow-xl">

        <CardHeader>
            <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-16 h-16 text-blue-500"/>
            <CardTitle className="text-center text-2xl">Loan Approver</CardTitle>
            </div>
        </CardHeader>
        <CardDescription className="text-center">
            Sign in to access the loan approver dashboard
        </CardDescription>
        <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <Input type="text" placeholder="email" className="border border-gray-300 bg-muted rounded-md p-2" {...register("email")}/>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <label htmlFor="password">Password</label>
                <Input type="password" placeholder="password" className="border border-gray-300 bg-muted rounded-md p-2" {...register("password")}/>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
            <Button className="w-full bg-blue-500 text-white py-2 rounded-md mt-6" type="submit">Sign In</Button>
            </form>
        </CardContent>
    </Card>
    </div>
    )
}

export default Login;