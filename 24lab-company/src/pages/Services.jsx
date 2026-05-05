import React from 'react'

const Services = () => {

  function serviceStyle(){
    return 'h-40 w-80 bg-gray-500 rounded-sm text-center text-white p-5'
  }

  return (
    <div className='flex flex-col gap-5 items-center '>
      <div className={serviceStyle()}>Service 1</div>
      <div className={serviceStyle()}>Service 2</div>
      <div className={serviceStyle()}>Service 3</div>
      <div className={serviceStyle()}>Service 4</div>
      <div className={serviceStyle()}>Service 5</div>
    </div>
  )
}

export default Services
