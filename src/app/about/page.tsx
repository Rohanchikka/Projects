"use client";
import { useRouter } from "next/navigation";
export default function about() {
    const router = useRouter();
  return (
    <div> <p>about</p>
    <button onClick={() => router.push("/")} className="bg-blue-500 rounded-md">
        Go home
    </button>
    </div>
  )
}
