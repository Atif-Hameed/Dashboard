import React from 'react'
import Sidebar from '../components/Sidebar'
import TableData from '../components/Table'

const Dashboard = () => {
  return (
    <>
      <div className='flex h-screen w-full' >
        <div className='w-[20%]' >
            <Sidebar/>
        </div>
        <div className='w-[80%]' >
            <div className='my-8'>
                <h1 className='text-5xl font-bold  text-center'>DashBoard</h1>
            </div>
            <TableData/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
