import React from 'react'

const About = () => {

  function boxStyle(){
    return 'h-40 w-40 bg-black text-white text-center p-4 hover:scale-110 transition-all'
  }

  return (
    <div>
      {/* About us */}
      <div className='p-10 m-10'>
          <h1 className='text-center text-6xl text-blue-500'>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati perspiciatis fuga maxime sequi, vero, mollitia eligendi est debitis enim quaerat nihil odio eos. Sapiente reiciendis iste omnis vero natus at architecto soluta facere esse fugit eveniet quae quis maxime corporis, delectus ea magni. Possimus ab eaque iusto iste! Tempore consequuntur, molestiae sint natus autem magnam assumenda repellendus iste perferendis saepe dignissimos! Aliquid molestiae labore alias totam architecto? Quasi, illum ex mollitia neque dolorum et quam, accusamus minima temporibus aut sint itaque tenetur. Ea doloribus nam odit temporibus. Similique ea ex dolore in voluptatem quo, fuga voluptate facilis nobis tempora vel.</p>
      </div>

      {/* why us */}
      <div>
        <h1 className='text-center text-6xl text-blue-500 p-5'>Why Us</h1>

        <div className='flex  gap-5 justify-center'>
          <div className={boxStyle()}>Box 1</div>
          <div className={boxStyle()}>Box 2 </div>
          <div className={boxStyle()}>Box 3</div>
          <div className={boxStyle()}>Box 4</div>
        </div>

      </div>
    </div>
  )
}

export default About
