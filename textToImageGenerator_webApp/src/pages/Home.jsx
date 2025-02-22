import React from 'react'
import Header from '../components/Header'
import WorkFlow from '../components/WorkFlow'
import Introduction from '../components/Introduction'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'

export default function Home() {
  return (
    <div>
      <Header/>
      <WorkFlow/>
      <Introduction/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  )
}
