import {loginuser} from "../api/loginapi";
import {useMutation} from "@tanstack/react-query";

export const useLogin = () => {
    const {mutateAsync,error} = useMutation({
        mutationFn: ({email,password}: {email:string,password:string}) => loginuser(email,password),
    });
 
    return {mutateAsync,error};
};