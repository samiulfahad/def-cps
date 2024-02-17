import React from "react"
import { Routes, Route } from "react-router-dom"

import Layout from "./common/Layout"
import { Home, AboutUs, Contact, Donate, Staff } from "./pages"
import Page404 from "./pages/Page404"
import Students from "./pages/students"
import Notice from "./pages/notice"
import AddStudent from "./pages/backend/add-sudent"
import UploadNotice from "./pages/backend/notice"
import PayFee from "./pages/pay-fee"
import Admission from "./pages/admission"
import ComingSoon from "./pages/coming-soon"
import AdmissionForm from "./pages/admission/admission-form"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pay-fee" element={<ComingSoon />} />
          <Route path="/notices" element={<Notice />} />
          <Route path="/upload-notice" element={<ComingSoon />} />
          <Route path="/students" element={<ComingSoon />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="*" element={<Page404 />} />

        </Routes>
      </Layout>
    </>
  )
}

export default App
