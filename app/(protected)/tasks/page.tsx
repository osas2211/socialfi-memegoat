import { PageContainer } from "@/components/shared/PageContainer"
import { Tasks } from "@/components/tasks/Tasks"
import React from "react"

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
