import Image from 'next/image'
import Link from 'next/link'
import TopHeader from './components/TopHeader'
import PersonalCar from './components/Headernav/PersonalCar'
import ForBusiness from './components/Headernav/ForBusiness'
import CarCare from './components/Headernav/CarCare'
import OtherLubricants from './components/Headernav/OtherLubricants'
import OilFilters from './components/Headernav/OilFilters'
import AboutUs from './components/Headernav/AboutUs'
import SearchButton from './components/Headernav/SearchButton'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='max-w-[1400px] mx-auto my-0 box-shadow box-border leading-[1.5] text-[12px] text-[#454545] relative'>
      <header className='bg-white relative '>
        <TopHeader />          
        <div className='h-auto min-h-[90px] relative grid grid-cols-7 grid-rows-1 m-0 p-0 items-center text-center w-full'>
          <PersonalCar />
          <ForBusiness />
          <CarCare />
          <OtherLubricants />
          <OilFilters />
          <AboutUs />
          <SearchButton />
        </div>
        <div className='bg-[#f2f2f2]'>
          <p className='underline py-3 border-t-[1px] border-b-[1px] pl-10 text-[16px]'>
            <a href='/'>
              Mobil™ lubricants
            </a>            
          </p>
        </div>
        </header>
      <div className='bg-white px-10 pt-10 mx-auto text-[16px] text-[#2b2626] pb-8'>
        <MainContent/>       
      </div>

      <div className='bg-[#383838] text-[#d4d4d4]'>
        <Footer />
      </div>
      
      

    </div>
      
        
  )
}