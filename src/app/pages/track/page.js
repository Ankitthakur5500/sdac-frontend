import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import Congsignmenttable from '@/app/components/table/Congsignmenttable'
import Topnavbar from '@/app/components/topnavbar/Topnavbar'
import React from 'react'

function page() {
  return (
    <div>
        <Topnavbar/>
        <Navbar/>
        <Congsignmenttable/>
        <Footer/>
    </div>
  )
}

export default page