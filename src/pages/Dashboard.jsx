import React from 'react'
import PageHeader from '../layouts/PageHeader'
import DashboardTable from '../widgets/DashboardTable'

const Dashboard = () => {
  return (
    <>
        <PageHeader title="Dashboard"/>
        <DashboardTable />

    </>
  )
}

export default Dashboard