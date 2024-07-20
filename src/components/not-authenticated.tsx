import React from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import {redirect} from "next/navigation"

const  NotAuthenticated = () =>{
  redirect("/signup")
  return (
    <div className="flex flex-col justify-center items-center p-4 w-screen h-svh text-center gap-4">
      <h1 className="text-xl md:text-3xl font-extrabold">You are not authenticated. Please login first</h1>  
      <h3 className="text-md md:text-xl ">You will be redirected to login page</h3>  
      <Link href="/signup" className={buttonVariants()}>
        Go To Login
      </Link>
    </div>
  )
}


export default NotAuthenticated
