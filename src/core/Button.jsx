import React from 'react'

const Button = ({ title, className }) => {
  return (
    <button
      className={`${className} font-dm font-medium text-xl leading-5 text-secondary-200 capitalize px-12 py-5 bg-tertiary rounded-md border border-solid border-tertiary duration-300 hover:bg-transparent hover:text-tertiary`}
      type='button'
    >
      {title}
    </button>
  )
}

export default Button
