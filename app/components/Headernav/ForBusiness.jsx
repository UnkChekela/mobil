import React from 'react'

const ForBusiness = () => {
  return (
    <div className='mx-[2px] my-0 group'>
              <div className='h-[89px] text-[#454545] w-full cursor-pointer group '>
                <span className='block max-w-[55px] min-w-[40px] max-h-[55px] min-h-[40px] h-[55px] mt-0 mb-[0px] mx-auto'>
                  <svg 
                    className='group-hover:fill-red-500 pb-2 fill-[#A6A6A6]'
                    xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                    <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                  </svg>
                </span>
                <span className='font-bold text-[#454545] text-[16px]'>
                  Для бизнеса
                </span>
              </div>
              <div className='mt-[8px] mb-0 border-white border-b-2 group-hover:border-red-500 mx-8'>
              </div>             
            </div>
  )
}

export default ForBusiness