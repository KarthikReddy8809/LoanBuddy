import { GraduationCap, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useNavigate } from '@tanstack/react-router';

const Header=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex flex-row sticky top-0 z-50 bg-white items-center w-screen justify-between h-20 border border-b-2 shadow-md border-muted">
            <div className="flex flex-row gap-4 ml-15">
            <div className='flex items-center justify-center bg-blue-500 mt-1 w-10 h-10 rounded-md p-2'>
            <GraduationCap className=" text-white"/>
            </div>
            <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Student Portal</h1>
            <p className="text-sm text-muted-foreground">Education Financing</p>
            </div>
            </div>
            <div className="flex flex-row items-center justify-end mr-15 gap-6">
            <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <LogOut className="w-5 h-5 hover:cursor-pointer" onClick={()=>{navigate({to:"/"})}} />
            </div>
        </div>
    )
}

export default Header
