import React from 'react'

const Home = () => {
  return (
    <div className='flex p-10 m-10 gap-10'>
      {/* logo */}
      <div>
        <img className='h-80 rounded-full ' src="https://images.unsplash.com/photo-1701764167166-d00e47d4263f?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
      </div>

      {/* information */}
      <div>
        <h1 className='text-blue-700 text-9xl text-center'>Canon</h1>
        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsum neque pariatur architecto obcaecati, rem perferendis eum sequi enim dolores.</p>

        <div className='flex flex-col items-center pt-10'>
            <label> Connect with us</label>
            <br />
            <input className='border' type="email" 
            placeholder='enter your email'/>
            <br />
            <button className='bg-black text-white rounded-full p-2'>Submit</button>

        </div>
      </div>
    </div>
  )
}

export default Home
