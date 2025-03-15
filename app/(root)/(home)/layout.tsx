import React, { ReactNode } from 'react'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'

const HomeLayout = ({children} : {children : ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <section className='flex min-h-screen flex-1 felx-col px-6 pb-6 pt-28 max-md:pb-14 sm-pd-14'>
              <div className='w-full'>
              {children}
              </div>
            </section>
        </div>
        
    </main>
  )
}

export default HomeLayout