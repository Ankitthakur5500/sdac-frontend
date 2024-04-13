import Footer from '@/app/components/footer/Footer'
import Insertdata from '@/app/components/insertdata/Insertdata'
import Navbar from '@/app/components/navbar/Navbar'
import Topnavbar from '@/app/components/topnavbar/Topnavbar'
import React from 'react'

function page() {
  return (
    <div>
        <Topnavbar/>
        <Navbar/>
        <Insertdata/>
        <Footer/>
    </div>
  )
}

export default page