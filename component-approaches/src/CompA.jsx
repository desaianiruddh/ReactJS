import React from 'react'
import CompB from './CompB';
const compA = () => {
  console.log('CompA Rendered');
  return (
    <CompB />
  )
}

export default compA;