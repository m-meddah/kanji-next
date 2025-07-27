"use client"

import { ReactNode } from "react"
import { useSession } from "@/lib/auth-client"

interface AuthWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function AuthWrapper({ children, fallback = null }: AuthWrapperProps) {
  const { data: session } = useSession()

  if (!session) {
    return <>{fallback}</>
  }

  return <>{children}</>
}