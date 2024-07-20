import { auth, signOut } from "@/lib/auth"
import NotAuthenticated from "@/components/not-authenticated"
import {Container} from "@/components/container"

import Image from "next/image"
import {signOutAction} from "@/lib/actions"

export default async function Home() {
  const session = await auth()
  if (!session?.user){
    return <NotAuthenticated/>
  }

  return (
  <Container className="flex-col justify-center mb-16">
    <Image className="rounded-full" src={session?.user?.image} height={200} width={200} />
    You are {session?.user?.name} and your email is {session?.user?.name}
    <form className="mt-4" action={signOutAction}>
      <button className="border-1 rounded-lg py-2 px-4 bg-neutral-400" type="submit">SignOut</button>
    </form>
  </Container> 
  );
}


