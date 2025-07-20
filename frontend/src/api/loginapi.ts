export const loginuser= async(email:string,password:string)=>{
    const response=await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    if(!response.ok){
        throw new Error("Invalid credentials")
    }
    const data=await response.json();
    return data;
}