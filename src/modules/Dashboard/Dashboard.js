import React from 'react'

// modules  
import { ClassSideBar } from '../ClassSideBar'
import { Workspace } from '../Workspace'

function Dashboard() {
  return (
    <div className='flex h-full'>
      <ClassSideBar />

      <Workspace />
    </div>
  )
}

export default Dashboard