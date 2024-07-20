import React from 'react'
import Link  from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { signUpAction } from "@/lib/actions"

const LoginModal = () =>{
  return (
        <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">SignUp</CardTitle>
        <CardDescription>
          SignUp using your Google account seamlessly
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={signUpAction} className="grid gap-4">
          <Button  variant="outline" className="w-full">
            SignUp with Google
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export {LoginModal};
