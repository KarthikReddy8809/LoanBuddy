import { ShieldCheck, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {Button} from "../ui/button";
import { useNavigate } from '@tanstack/react-router';

const Header=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex flex-row sticky top-0 z-50 bg-white items-center w-screen justify-between h-20 border border-b-2 shadow-md border-muted">
            <div className="flex flex-row gap-4 ml-15">
            <div className='flex items-center justify-center bg-blue-100 mt-1 w-10 h-10 rounded-md p-2'>
            <ShieldCheck className=" text-blue-950"/>
            </div>
            <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Loan Approver Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage student loan applications</p>
            </div>
            </div>
            <div className="flex flex-row items-center justify-end mr-15 gap-6">
            <Button className='bg-white text-black border hover:text-black hover:bg-white hover:cursor-pointer' onClick={()=>{navigate({to:"/approver/login"})}}>
            <LogOut className="w-5 h-5 hover:cursor-pointer" />
            <h3>Log Out</h3>
            </Button>
            </div>
        </div>
    )
}

export default Header
