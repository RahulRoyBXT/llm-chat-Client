import React from 'react'

export const Button = ({children, className, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
        {children}
    </div>
  )
}

