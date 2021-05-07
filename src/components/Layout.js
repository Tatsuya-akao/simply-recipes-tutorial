import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"
import PageTransition from "gatsby-plugin-page-transitions"

const Layout = ({ children }) => {
  return (
    <>
      <PageTransition>
        <Navbar />
        {children}
        <Footer />
      </PageTransition>
    </>
  )
}

export default Layout
