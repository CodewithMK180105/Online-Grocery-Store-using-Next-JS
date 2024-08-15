"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { useState } from "react";

export default function createAccount(){
    

    const [formData,setFormData]=useState({
        username: "",
        email: "",
        password: "",
    });

    const [error,setError]=useState("");

    const handleChange=(e:any)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }));
    }

    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    const handleCreateAccount=()=>{
        const {username,email,password}=formData;
        if(!username || !email || !password){
            setError("All Fields are Required");
        }
        else if (!validateEmail(email)) {
            setError("Please enter a valid email address");
        }
        else{
            setError("");
        }
    }


    return(
        <div className="flex items-baseline justify-center my-20">
            <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
                <Image
                    src="/logo2.png" width={200} height={200} alt="logo"
                />
                <h2 className="font-bold text-3xl">Sign In</h2>
                <h2 className="text-gray-500">Enter your Email and Password to Sign In</h2>
                <div className="w-full flex flex-col gap-5 mt-7">

                    <Input 
                        placeholder="Username" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <Input 
                        placeholder="name@example.com" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    {error && <p className="text-red-500">{error}</p>}
                    <Button onClick={handleCreateAccount}>Sign In</Button>
                    <p>Don't have an Account? 
                        <Link href='/create-account' className="text-blue-500">
                            Click here to Create new Account            
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}