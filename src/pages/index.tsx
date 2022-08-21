import React from 'react'
import { ApplicationsTable } from '../components/Applications/ApplicationsTable'
import { withServerSideAuth } from "@clerk/nextjs/ssr";


const Index = () => {
  return (
    <>
      <ApplicationsTable />
    </>
  )
}

export default Index