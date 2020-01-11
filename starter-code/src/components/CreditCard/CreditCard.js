import React from 'react'
import './CreditCard.css'

const getMonth = (month) => month.toString().length === 1 ? '0' + month : month

const imageCard = {
  Visa: '/img/visa.png',
  "Master Card": '/img/master-card.svg'
}

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => (
    <div className="creditcard-container" style={{ background: bgColor, color: color }}>
      <img src={imageCard[type]} alt={type}></img>
      <p>···· ···· ···· {number.substring(11, 15)}</p>
      <p>Expires {getMonth(expirationMonth)}/{expirationYear} - {bank}</p>
      <p>{owner}</p>
    </div>
  )

export default CreditCard

