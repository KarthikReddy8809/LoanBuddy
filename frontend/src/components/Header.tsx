import { GraduationCap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header=()=>{
    return(
        <div className="flex flex-row items-center w-screen justify-between h-20 border border-b-2 shadow-md border-muted">
            <div className="flex flex-row gap-4 ml-15">
            <div className='flex items-center justify-center bg-blue-500 mt-1 w-10 h-10 rounded-md p-2'>
            <GraduationCap className=" text-white"/>
            </div>
            <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Student Portal</h1>
            <p className="text-sm text-muted-foreground">Education Financing</p>
            </div>
            </div>
            <Avatar className="w-12 h-12 mr-15">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SC</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Header
