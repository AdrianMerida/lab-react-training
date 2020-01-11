import React from 'react'

// function randomValue(min, max) {
//   return Math.floor(Math.random() * max) + min
// } 

const randomValue = (min, max) => Math.floor(Math.random() * max) + min

const Random = ({ min, max }) => (
  <div>
    <p>Random value between {min} and {max} => {randomValue(min, max)}</p>
  </div>
)

export default Random