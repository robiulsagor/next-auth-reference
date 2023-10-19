'use client'

import { useSession, signOut } from "next-auth/react"
import Login from "./components/Login"
import Image from "next/image"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return <Login />
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center p-5 shadow-2xl rounded-lg flex items-center justify-center flex-col gap-5 w-[300px] py-10">
        <Image className="rounded-full"
          src={session?.user?.image || ''} alt="user image"
          height={80} width={80} />
        <h2 className="text-2xl">Hello, <span className="font-bold"> {session?.user?.name}</span></h2>

        <button className="text-xl bg-black text-white rounded-md  px-5 py-1 font-bold animate-pulse" onClick={() => signOut()}>Logout</button>
      </div>
    </div>
  )
}

