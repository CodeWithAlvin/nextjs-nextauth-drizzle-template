import { LoginModal }  from "@/components/login-modal";
import {Container} from "@/components/container"

export default function Page() {
  return (
    <Container className="h-screen px-3 bg-gradient-to-br from-neutral-100 via-slate-100 to-zinc-300 dark:from-neutral-900 dark:from-neutral-900 dark:from-neutral-900">
      <LoginModal />
    </Container>
  )
}




