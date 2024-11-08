import './home.css'
import Navbar from '../../components/Navbar/Navbar';
// import hero_banner from '../../assets/hero_banner.jpg'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        {/* <img src={hero_banner} alt="hero" /> */}
      </div>
    </div>
  )
}

export default Home