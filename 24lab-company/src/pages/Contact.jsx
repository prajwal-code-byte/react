import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-4xl mx-auto p-8 space-y-8'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold text-blue-700'>Contact Us</h1>
        <p className='mt-4 text-gray-600'>Have a question or need support? Send us a message and we’ll get back to you soon.</p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='rounded-3xl border border-gray-200 bg-white p-8 shadow-sm'>
          <h2 className='text-2xl font-medium text-gray-900 mb-4'>Get in touch</h2>
          <div className='space-y-4 text-gray-700'>
            <div>
              <p className='font-semibold'>Email</p>
              <p>example@gmail.com</p>
            </div>
            <div>
              <p className='font-semibold'>Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <p className='font-semibold'>Address</p>
              <p>123 Canon Street, New York, NY</p>
            </div>
          </div>
        </div>

        <form className='rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input id='name' type='text' placeholder='Your name' className='mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none' />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input id='email' type='email' placeholder='you@example.com' className='mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none' />
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
            <textarea id='message' rows='5' placeholder='Write your message...' className='mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none' />
          </div>

          <button type='submit' className='w-full rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
