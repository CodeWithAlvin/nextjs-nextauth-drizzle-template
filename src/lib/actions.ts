"use server"

import { signIn,signOut } from "@/lib/auth"


export async function signUpAction(){
    await signIn("google", { redirectTo: "/" })
}

export async function signOutAction(){
    await signOut()
}

