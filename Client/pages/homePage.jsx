import React from 'react'
import Hero from '../components/hero';
import HomeCards from '../components/homeCards';
import DashboardItems from '../components/dashboarditems';

const HomePage = () => {
  return (
    <>

      <Hero title='"Unlock Your Potential, One Lesson at a Time"' subtitle='This academy conveys the idea of growth, learning, and personal development. If you want something more specific to the subject or focus of Mint Academy, let me know and I can tailor it further!' />
      <DashboardItems isHome = {true}/>

      <HomeCards />

    </>
  )
}

export default HomePage