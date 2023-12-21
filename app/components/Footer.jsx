import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#383838]'>
        <div className='w-full box-border mx-auto pl-10 px-0 block text-stone-200 font-normal leading-[1.42857143] text-[22.4px] pb-[55px] pt-[63px]'>
          <div className='pb-[42px] border-b border-[#d3d6d8] flex'>
            <div className='flex w-full flex-wrap'>
              <div className='flex w-1/2'>
                <div className='w-1/3'>
                  <h4 className='text-[18px] mb-[28px] mt-0 font-[700] leading-[1.1]'>
                    Сервис
                  </h4>
                  <div className='flex flex-col text-[14px] cursor-pointer'>
                    <a className='pb-2 hover:text-red-500'>О нас</a>
                    <a className='pb-2 hover:text-red-500'>Оплата и доставка</a>
                    <a className='pb-2 hover:text-red-500'>Утилизация отработанного масла</a>
                    <a className='pb-2 hover:text-red-500'>Связаться c нами</a>
                    <a className='pb-2 hover:text-red-500'>Настройки файлов cookie</a>
                  </div>                 

                </div>
                <div className='w-1/3'>
                  <h4 className='text-[18px] mb-[28px] mt-0 font-[700] leading-[1.1]'>
                    Oil Hub
                  </h4>
                  <div className='flex flex-col text-[14px] cursor-pointer'>
                    <a className='pb-2 hover:text-red-500'>Условия пользования</a>
                    <a className='pb-2 hover:text-red-500'>Юридическая информация</a>
                    <a className='pb-2 hover:text-red-500'>Отмена заказа</a>
                    <a className='pb-2 hover:text-red-500'>Условия конфиденциальности</a>
                    <a className='pb-2 hover:text-red-500'>Блог</a>
                  </div>
                </div>
                <div className='w-1/3'>
                  <h4 className='text-[18px] mb-[28px] mt-0 font-[700] leading-[1.1]'>
                    Контакты
                  </h4>
                  <div className='flex flex-col text-[14px] cursor-pointer'>
                    <a href='+998909851164' className='pb-2 hover:text-red-500'>
                      <span className='mr-[10px] inline-block'>
                        <svg className='h-[17px] overflow-visible fill-stone-400 hover:fill-green-600' viewBox='0 0 17 17'>
                          <path d='M3.41889 7.35722C4.77889 10.03 6.97 12.2211 9.64278 13.5811L11.7206 11.5033C11.985 11.2389 12.3533 11.1633 12.6839 11.2672C13.7417 11.6167 14.875 11.8056 16.0556 11.8056C16.306 11.8056 16.5463 11.9051 16.7234 12.0822C16.9005 12.2593 17 12.4995 17 12.75V16.0556C17 16.306 16.9005 16.5463 16.7234 16.7234C16.5463 16.9005 16.306 17 16.0556 17C11.7974 17 7.71356 15.3084 4.70256 12.2974C1.69156 9.28644 0 5.20264 0 0.944444C0 0.693962 0.0995036 0.453739 0.276621 0.276621C0.453739 0.0995036 0.693962 0 0.944444 0H4.25C4.50048 0 4.74071 0.0995036 4.91782 0.276621C5.09494 0.453739 5.19444 0.693962 5.19444 0.944444C5.19444 2.125 5.38333 3.25833 5.73278 4.31611C5.83667 4.64667 5.76111 5.015 5.49667 5.27944L3.41889 7.35722Z'></path>
                        </svg>                        
                      </span>
                      +99890 985 11 64                      
                    </a>
                    <a href='+998909851164' className='pb-2 hover:text-red-500'>
                      <span className='mr-[10px] inline-block'>
                        <svg className='h-[17px] overflow-visible hover:fill-red-500 fill-stone-400' viewBox='0 0 20 16'>
                          <path d='M18 4.27656L10 9.02656L2 4.27656V2.37656L10 7.12656L18 2.37656V4.27656ZM18 0.476562H2C0.89 0.476562 0 1.32206 0 2.37656V13.7766C0 14.2805 0.210714 14.7637 0.585786 15.1201C0.960859 15.4764 1.46957 15.6766 2 15.6766H18C18.5304 15.6766 19.0391 15.4764 19.4142 15.1201C19.7893 14.7637 20 14.2805 20 13.7766V2.37656C20 1.32206 19.1 0.476562 18 0.476562Z'></path>
                        </svg>                        
                      </span>
                      info@oilhub.uz                    
                    </a>                    
                  </div>   
                </div>
              </div>

              <div className='flex w-1/2'>
                <div className='w-1/3'>
                    <h4 className='text-[18px] mb-[28px] mt-0 font-[700] leading-[1.1]'>
                    Методы оплаты
                    </h4>
                    <ul className='grid grid-cols-2 grid-rows-3 max-w-[160px]'>
                        <li className='w-[72px] border border-black rounded-[6px] bg-white mb-[10px] block px-0 py-[11px] cursor-pointer max-h-[40px]'>
                            <div className='flex justify-center items-center'>                            
                                <Image
                                className=''                        
                                src='/uzumbank-logo.svg'
                                alt='Лого Узумбанк'
                                width={48}
                                height={16}
                            />
                            </div>
                        </li>
                        <li className='w-[72px] border border-black rounded-[6px] bg-white mb-[10px] block px-0 py-[11px] cursor-pointer max-h-[40px]'>
                            <div className='flex justify-center items-center'>
                                <Image
                                className=''                            
                                src='/payme-logo.svg'
                                alt='Лого Пэйми'
                                width={48}
                                height={16}
                                />
                            </div>
                        </li>
                        <li className='w-[72px] border border-black rounded-[6px] bg-white mb-[10px] block px-0 py-[11px] cursor-pointer max-h-[40px]'>
                            <div className='flex justify-center items-center'>
                                <Image
                                className=''                            
                                src='/visa-logo.svg'
                                alt='Лого Виза'
                                width={48}
                                height={16}
                                />
                            </div>
                        </li>
                        <li className='w-[72px] border border-black rounded-[6px] bg-white mb-[10px] block px-0 py-[5px] cursor-pointer max-h-[40px]'>
                            <div className='flex justify-center items-center'>
                                <Image
                                className=''                            
                                src='/mastercard-logo.svg'
                                alt='Лого Виза'
                                width={48}
                                height={16}
                                />
                            </div>
                        </li>
                        <li className='w-[72px] border border-black rounded-[6px] bg-white mb-[10px] block px-0 py-[10px] cursor-pointer max-h-[40px]'>
                            <div className='flex justify-center items-center'>
                                <Image
                                className=''                            
                                src='/click-logo.png'
                                alt='Лого Виза'
                                width={48}
                                height={16}
                                />
                            </div>
                        </li>
                    </ul> 
                </div>
                <div className='w-1/3'>
                    <h4 className='text-[18px] mb-[28px] mt-0 font-[700] leading-[1.1]'>
                    Сервисы доставки
                    </h4>
                </div>
              </div>

            </div>

          </div>

        </div>
      </footer>
  )
}

export default Footer