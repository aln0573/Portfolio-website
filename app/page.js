'use client'

import About from "./components/About";
import { AnimationWrapper } from "./components/AnimationWrapper";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <AnimationWrapper>
        <Header />
      </AnimationWrapper>

      <AnimationWrapper>
        <About />
      </AnimationWrapper>

      <AnimationWrapper>
        <Skills />
      </AnimationWrapper>

      <AnimationWrapper>
        <Services />
      </AnimationWrapper>

      <AnimationWrapper>
        <Work />
      </AnimationWrapper>

      <AnimationWrapper>
        <Contact />
      </AnimationWrapper>

      <AnimationWrapper>
        <Footer />
      </AnimationWrapper>
    </>
  );
}
