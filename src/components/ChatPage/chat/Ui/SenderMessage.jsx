import React from 'react'

export const SenderMessage = ({message, sender}) => {
  return (
    <div className='min-h-30 max-h-fit bg-dark/10 w-full rounded-xl p-2'>
    <h3>{sender}: says</h3>
    <p>{message}</p>
    </div>
  )
}
