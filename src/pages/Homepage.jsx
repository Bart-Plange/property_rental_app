import {Hero, Importance, MortgageIntro, Properties} from '../components'
const Homepage = () => {
  return (
    <div className='flex flex-col'>
        <Hero/>
        <Properties/>
        {/* <Caurosel/> */}
        <Importance/>
        <MortgageIntro/>
    </div>
  )
}

export default Homepage