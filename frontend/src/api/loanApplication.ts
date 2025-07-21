export const loanApplication= async(token:string)=>{
    const response=await fetch("http://localhost:5000/loans",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    if(!response.ok){
        throw new Error("Failed to fetch loans")
    }
    const data=await response.json();
    return data;
}
