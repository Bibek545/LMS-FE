import React from 'react'
import CustomCarousel from '../../components/customCarousel/CustomCarousel'
import JustInSection from '../../components/pageSection/JustInSection'
import BestRead from '../../components/pageSection/BestRead'
import Recommendation from '../../components/pageSection/Recommendation'
import { Col, Container, Row } from 'react-bootstrap'

const HomePage = () => {
  return (
    <Container className = " mb-4">
     <Row> 
      <Col> 
      {/* Hero Section */}
      <CustomCarousel />

      {/* Just In section */}
      <div className="d-flex justify-content-center mt-4">
        <div className="w-75">
          <JustInSection />
        </div>
      </div>

      {/* Best Read section */}
      <div className="d-flex justify-content-center mt-4">
        <div className="w-75">
          <BestRead />
        </div>
      </div>

      {/* Recommendation section */}
      <div className="d-flex justify-content-center mt-4">
        <div className="w-75">
          <Recommendation />
        </div>
      </div>
      </Col>
</Row>
    </Container>
  )
}

export default HomePage
