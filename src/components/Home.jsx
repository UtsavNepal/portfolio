
import Header from './Header/Header'

import About from './About/About'
import Skill from './Skill/Skill'
import Portfolio from '../components/Portfolio/Portfolio'
 
import Footer from './Footer/Footer'
 
import Experience from './Experience/Experience'
import Label from './Marquee/Marquee'

 const Home = () => {
  return (
    <div className='hover-target'>
     <Header></Header>
     {/* <Landing></Landing> */}
     <About></About>
     
     <Skill></Skill>
     <Label/>
     <Experience></Experience>
     <Portfolio></Portfolio>
     
     
    
     <Footer></Footer>
     </div>
  )
}

export default Home
