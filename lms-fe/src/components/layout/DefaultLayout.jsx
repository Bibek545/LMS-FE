import React from 'react'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
      {/* nav bar */}
        <Header />

      {/* main body */}
      <main className="main">{children}</main>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default DefaultLayout
