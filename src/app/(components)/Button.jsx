'use client'
import React from 'react'



function Button() {
  const handleclick = () => {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleclick}>clickme</button>
  )
}

export default Button