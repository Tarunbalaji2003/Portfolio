import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={'${styles.paddingX} absolute inset-0 top-[120px] mac-w-7xl mx-auto flex flex-row items-start gap-5'}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
         <h1
                     className={'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-1[98px] mt-2'}> I'm <span className="text-[#915eff]">TARUNBALAJI</span></h1>
          <p className={'${styles.heroSubText} mt-2 mt-2 text-white-100'}> 
          MERN Stack Developer<br className='sm:block hidden'/>
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          
        </a>
        
      </div>
    </section>
  )
}

export default Hero