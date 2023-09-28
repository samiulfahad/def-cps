import React from "react"
import Layout from "./common/Layout"
import Home from "./pages/home/home"
import Contact from "./pages/contact/contact"

const App = () => {
  return (
    <>
      <Layout>
        <Home />
        <Contact />
      </Layout>
    </>
  )
}

export default App
