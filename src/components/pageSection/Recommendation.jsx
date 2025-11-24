import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle.jsx'
import CustomCard from '../customCard/CustomCard.jsx'

const Recommendation = () => {
  return (
  <div className='mt-5'>
      <SectionTitle title=" Recommendation"/>
    <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <CustomCard />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <CustomCard />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <CustomCard />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <CustomCard />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Recommendation