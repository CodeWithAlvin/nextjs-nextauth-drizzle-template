### tailwind + typescript + shadcn + next-auth(google) + drizzle + postgres setup

1. Clone Repo
```
https://github.com/CodeWithAlvin/nextjs-nextauth-drizzle-template.git
```

2. Install dependincies
```
pnpm i
```

3. Install Updated Shadcn componenet 
```
pnpm dlx shadcn-ui@latest add
```
4. auth secret generation
```
npx auth secret
```
5. `.env` creation

```
DATABASE_URL=
NODE_ENV=development
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
BASE_URL=http://localhost.com:3000
```

6. Configure your schema in `src/lib/db/schema.ts`

7. migrate and push schema changes
```
pnpm migrations:generate
pnpm migrations:push
```

8. Happy Development