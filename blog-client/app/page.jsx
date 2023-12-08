"use client"
import { useSession } from "next-auth/react"

export default function Home() {
  const {data} = useSession()
  console.log(data)
  return (
  <main>
    <h1>Home</h1>
  </main>
  )
}
