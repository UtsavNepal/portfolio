import Header from './Header/Header'
import About from './About/About'
import Skill from './Skill/Skill'
import Portfolio from '../components/Portfolio/Portfolio'
import Footer from './Footer/Footer'
import Experience from './Experience/Experience'
import Label from './Marquee/Marquee'


const Home = () => {
  return (
    <div className='bg-[#171717] text-white hover-target'>
     <Header />
     {/* <Landing></Landing> */}
     <About />
     <Experience />
     <Portfolio />
     <Label />
     <Skill />
    
     <Footer />
    </div>
  )
}

export default Home