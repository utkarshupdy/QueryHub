"use client"
import { useAuthStore } from '@/store/Auth'

import React from 'react'

function LoginPage() {
    const {login} = useAuthStore()
    const [isLoading , setIsLoading] = React.useState(false);
    const [error , setError] = React.useState("");

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //collect data
        const formdata = new FormData(e.currentTarget)
        const email = formdata.get("email");
        const password = formdata.get("password");


        //validation
        if(!email || !password){
            setError(()=>"Please fill all feilds");
            return;
        }

        // handle loading and errors
        setIsLoading(()=> true);
        setError(() => "")

        // login =>store
        const loginResponse = await login(email.toString() , password.toString());
         //handle responses
        if(loginResponse.error){
            setError(()=> loginResponse.error!.message)
        }

        setIsLoading(false);


    }
  return (
    <div>page</div>
  )
}

export default LoginPage