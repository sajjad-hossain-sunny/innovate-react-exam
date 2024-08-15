import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="pt-48.75 pb-139.5 bg-banner bg-no-repeat bg-center">
        <div className="container flex flex-col items-center">
          <div className="w-199 text-white mx-auto text-center">
            <h1 className="font-chivo font-bold text-56px">Get your work done with Management Tool</h1>
            <p className="font-dm text-lg mt-5 w-116.75 mx-auto">The world's first project management platform that connects everything</p>
          </div>
          <form action="" className="py-2 pr-2 pl-6 bg-white">
            <input
              type="text"
              className='w-120 rounded-md'
              placeholder='Your business email'
            />
            <button
              type='button'
              className='px-7 py-3.75 rounded-md bg-tertiary '
            >
              Try for free
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Banner
