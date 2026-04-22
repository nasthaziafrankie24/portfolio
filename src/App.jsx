import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Skill from "./components/Skill"
import Projects from "./components/Projects"
import Certification from "./components/Certifications";
import Contact from "./components/Contact"

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Experience/>
        <Skill/>
        <Projects/>
        <Certification />
        <Contact/>
      </main>
    </>
  )
}

export default App
