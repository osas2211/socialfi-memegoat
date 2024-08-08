"use client"
import { instance } from "@/app/api"
import React, { useEffect } from "react"
import { UserStore } from "@/utils/store"
import throwError from "@/utils/throwError"
import { useRouter } from "next/navigation"
import { AxiosError, AxiosResponse } from "axios"
import { Dashboard } from "@/components/dashboard/Dashboard"
import { PageContainer } from "@/components/shared/PageContainer"

const DashboardPage = () => {
  const router = useRouter()

  const { me, setMe } = UserStore()

  const dashboard = async () => {
    await instance.get('/dashboard')
      .then(({ data }: AxiosResponse) => {
        setMe(data.data)
        localStorage.setItem('auth', 'true')
      }).catch((err: AxiosError) => {
        if (err.response?.status === 403) {
          router.push('/')
        } else {
          throwError(err)
        }
        localStorage.removeItem('auth')
      })
  }

  useEffect(() => {
    dashboard()
  }, [])

  return (
    <div>
      <PageContainer>
        <Dashboard me={me} />
      </PageContainer>
    </div>
  )
}

export default DashboardPage
