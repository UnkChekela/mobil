import React from 'react'
import Image from 'next/image'
import FeaturedProducts from './FeaturedProducts'


const MainContent = () => {
  return (
    <div className='flex flex-col min-h-[600px]'>
      <div className='mb-8'>
        <h1 className='text-[50px] text-[#5d5b5b]'>
        Смазочные материалы Mobil™ 
        </h1>
      </div>

      <div className='px-[-30px] grid grid-cols-2 grid-rows-1'>
        <div className=''>
          <div>
            <Image
              width={640}
              height={300}
              src='/hero1.jpg'
            /> 
            <div className='flex flex-col'>
              <h1 className='text-[40px] text-[#5d5b5b] mt-2 mb-[10px]'>
                Для личного авто
              </h1>
              <p className='max-w-[640px] mb-[10px]'>
              Узнайте, как разрабатываются продукты Mobil™, которые помогут вам добиться превосходной производительности и защиты двигателя, 
              необходимых для вашего автомобиля, грузовика, внедорожника или мотоцикла.
              </p>
              <p className='flex flex-row'>
                <span className='cursor-pointer hover:underline text-[#0c479d] text-[20px]'>
                  Найти больше &gt;             
                </span>
                       
              </p>
            </div>           
          </div>
        </div>
        <div className='ml-[20px]'>
          <div>
            <Image
              width={640}
              height={300}
              src='/hero2.jpg'
            /> 
            <div className='flex flex-col'>
              <h1 className='text-[40px] text-[#5d5b5b] mt-2 mb-[10px]'>
                Для бизнеса
              </h1>
              <p className='max-w-[640px] mb-[10px] min-h-[72px]'>
              Узнайте, как отраслевой опыт Mobil Serv℠ и смазочные материалы Mobil Delvac™ могут помочь удовлетворить потребностям вашего бизнеса.
              </p>
              <p className='flex flex-row'>
                <span className='cursor-pointer hover:underline text-[#0c479d] text-[20px]'>
                  Найти больше &gt;             
                </span>                  
              </p>
            </div>           
          </div>
        </div>
      </div>
      <div className='mt-10 py-3 border-b-[1px] border-stone-200 text-[20px] bg-[#f0f0f0] mx-[-40px] border-t-[1px]'>
        <span className='pl-[40px]'>Рекомендованные товары</span>         
      </div>
      <FeaturedProducts/>    
    
    </div>
  
    
  )
}

export default MainContent