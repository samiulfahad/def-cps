import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./common/Layout"
import { Home, AboutUs, Contact, Donate, Committee } from "./pages"
import Page404 from "./pages/Page404"
import Students from "./pages/students"
import Notice from "./pages/notice"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/notices" element={<Notice />} />
          <Route path="/students" element={<Students />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Committee />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
