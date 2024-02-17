import React from "react"
import Slider from "./Slider"
import { HeroSection, FeatureGrid } from "./HeroSection"
import FeatureSection from "./FeatureSection"
import FeatureSection2 from "./FeatureSection2"
import MissionSection from "./Mission"
import FAQSection from "./FAQ"
import TestimonialsSection from "./Testimonial"
import { Messages } from "./Messages"
const Home = () => {
  return (
    <>
      <Slider />
      {/* <HeroSection /> */}
      <FeatureGrid />
      <MissionSection/>
      <FeatureSection />
      <Messages/>
      <FeatureSection2 />
      <TestimonialsSection/>
      <FAQSection/>

    </>
  )
}

export default Home
