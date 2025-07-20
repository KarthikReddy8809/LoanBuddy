import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog"
import {useForm} from "react-hook-form"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner"
import {Input} from "./ui/input"
import {Button} from "./ui/button"
const ApplicationForm = () => {
    const schema = z.object({
        Firstname: z.string().min(3, "Name must be at least 3 characters long"),
        Lastname:z.string().min(3,"Name must be at least 3 characters long"),
        Course:z.string().min(3,"Name must be at least 3 characters long"),
        University:z.string().min(3,"Name must be at least 3 characters long"),
        GPA:z.number().min(3,"GPA must be a number"),
        Income:z.number().min(3,"Income must be a number"),
        LoanAmount:z.number().min(3,"Loan Amount must be a number"),
        Address:z.string().min(3,"Address must be at least 3 characters long"),
      });
      type FormData = z.infer<typeof schema>;
      const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
      });
      const onSubmit = (data:FormData)=>{
        console.log(data);
        toast.success("Application submitted successfully")
      }
  return (
    <DialogContent className="max-h-[90vh] overflow-y-auto w-full max-w-2xl">
      <DialogHeader >
        <DialogTitle>Application Form</DialogTitle>
        <DialogDescription>Fill the form to apply for a loan</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname" className="text-black">First Name</label>
            <Input type="text" className="shadow-sm" {...register("Firstname")} />
            {errors.Firstname && <p className="text-red-500">{errors.Firstname.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="text-black">Last Name</label>
            <Input type="text" className="shadow-sm" {...register("Lastname")} />
            {errors.Lastname && <p className="text-red-500">{errors.Lastname.message}</p>}
          </div>
          </div>
          <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="course" className="text-black">Course</label>
            <Input type="text" className="shadow-sm" {...register("Course")} />
            {errors.Course && <p className="text-red-500">{errors.Course.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="university" className="text-black">University</label>
            <Input type="text" className="shadow-sm" {...register("University")} />
            {errors.University && <p className="text-red-500">{errors.University.message}</p>}
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gpa" className="text-black">GPA</label>
            <Input type="text" className="shadow-sm" {...register("GPA")} />
            {errors.GPA && <p className="text-red-500">{errors.GPA.message}</p>}
          </div>
          <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="income" className="text-black">Income</label>
            <Input type="text" className="shadow-sm" {...register("Income")} />
            {errors.Income && <p className="text-red-500">{errors.Income.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="loanamount" className="text-black">Loan Amount</label>
            <Input type="text" className="shadow-sm" {...register("LoanAmount")} />
            {errors.LoanAmount && <p className="text-red-500">{errors.LoanAmount.message}</p>}
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-black">Address</label>
            <Input type="text" className="shadow-sm" {...register("Address")} />
            {errors.Address && <p className="text-red-500">{errors.Address.message}</p>}
          </div>
        </div>
        <DialogFooter className="flex flex-row justify-end mt-6">
        <DialogClose asChild>
        <Button type="submit" size="lg" className="bg-blue-500 text-white hover:bg-blue-600">Submit</Button>
        </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

export default ApplicationForm
