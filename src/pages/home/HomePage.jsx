import React from 'react'
import CustomCarousel from '../../components/customCarousel/CustomCarousel'
import JustInSection from '../../components/pageSection/JustInSection'
import BestRead from '../../components/pageSection/BestRead'
import Recommendation from '../../components/pageSection/Recommendation'

const HomePage = () => {
  return (
    <div>
      <p>My home page</p>
      {/* Hero Section */}
      <CustomCarousel />

      {/* Just in section */}
      <JustInSection />

      {/* Best read section */}
      <BestRead />

      {/* recommendation section */}
      <Recommendation />
    </div>
  )
}

export default HomePage
