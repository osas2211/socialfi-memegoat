import React from "react"
import { Tasks } from "@/components/tasks/Tasks"
import { PageContainer } from "@/components/shared/PageContainer"

const DashboardPage = () => {
  return (
    <div>
      <PageContainer>
        <Tasks />
      </PageContainer>
    </div>
  )
}

export default DashboardPage
