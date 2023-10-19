"use client"
import { signIn, useSession } from "next-auth/react"

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#334466]">
            <button className="text-3xl bg-white rounded-md  px-7 py-2 font-bold animate-pulse" onClick={() => signIn()}>Login</button>
        </div>
    )
}

export default Login