"use client"
import { AuthStore } from "@/utils/store"
import { useEffect, FC, ReactNode } from "react"

export const IsAuth: FC<{ children: ReactNode }> = ({ children }) => {
    const { setIsAuth } = AuthStore()

    useEffect(() => {
        const auth = localStorage.getItem('auth')

        if (auth) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    return children
}