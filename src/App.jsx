import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import Title from './Components/Title'
import About from './Components/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
<Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
<Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App