import prisma from "@/config/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <>
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          {user.email}
        </li>
      ))}
    </>
  );
}
