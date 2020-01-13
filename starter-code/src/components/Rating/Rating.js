import React from 'react'

const emptyStar = (number) => {
  const stars = []
  const totalEmptyStars = 5 - Math.round(number) - 1
  for (let i = 0; i <= totalEmptyStars; i++) {
    stars.push(<i>Empty</i>)
  }
  return stars
}


const fillStar = (number) => {
  if (number === 0) {
    return null
  }
  const stars = []
  const totalFillStars = Math.round(number) - 1
  for (let i = 0; i <= totalFillStars; i++) {
    stars.push(<i>Fill</i>)
  }
  return stars
}

const Rating = ({ children }) => (
  <div>
    {fillStar(children)}{emptyStar(children)}
  </div>
)

export default Rating