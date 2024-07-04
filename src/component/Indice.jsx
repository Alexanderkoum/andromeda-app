import React from 'react'

const Indice = ({symbol, nom, price}) => {
  return (
    <div className='d-flex align-items-center justify-content-center bg-white bg-opacity-10 gap-2 rounded-pill py-1 px-3 '>
      <img src={symbol} alt="symbol"/>
      <p className='fs-6 text-white my-0'>{nom}</p>
      <p className='fs-6 text-success my-0'>{price}</p>
    </div>
  )
}

export default Indice