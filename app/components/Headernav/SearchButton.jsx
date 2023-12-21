import React from 'react'

const SearchButton = () => {
  return (
    <div className='mx-[2px] my-0 group'>
              <div className='h-[89px] text-[#454545] w-full cursor-pointer group'>
                <span className='block max-w-[55px] min-w-[40px] max-h-[55px] min-h-[40px] h-[55px] mt-0 mb-[0px] mx-auto'>
                  <svg
                    className='pt-4 group-hover:fill-red-500 fill-[#A6A6A6]'
                    xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 20 20">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg></span>
              </div>
              <div className='mt-[8px] border-white mb-0 border-b-2 group-hover:border-red-500 mx-8 '>
              </div>
            </div>
  )
}

export default SearchButton