import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/lib/db/db"
import { users, accounts, authenticators } from "@/lib/db/schema"
import { eq } from "drizzle-orm"


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
  ],
  adapter: DrizzleAdapter(db,{
    usersTable: users,
    accountsTable: accounts
  }),
  session: { strategy: "jwt" },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
    signIn: async ({profile}) => {
      const result = await db.select({ isBlocked: users.isBlocked }).from(users).where(eq(users.email,profile.email))
      return !result[0]?.isBlocked
    }
  },
  pages:{
    signIn:"/signup"
  },
})