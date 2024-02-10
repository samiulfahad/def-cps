import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./common/Layout"
import { Home, AboutUs, Contact, Donate, Committee } from "./pages"
import Page404 from "./pages/Page404"
import Students from "./pages/students"
import Notice from "./pages/notice"
import AddStudent from "./pages/backend/add-sudent"
import UploadNotice from "./pages/backend/notice"
import PayFee from "./pages/pay-fee"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pay-fee" element={<PayFee />} />
          <Route path="/notices" element={<Notice />} />
          <Route path="/upload-notice" element={<UploadNotice />} />
          <Route path="/students" element={<Students />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Committee />} />
          <Route path="*" element={<Page404 />} />

          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
