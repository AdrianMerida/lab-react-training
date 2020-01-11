import React from 'react'
import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture}) => (
  <div className="idcard-info">
    <img src={picture} alt={firstName}></img>
    <div>
      <h3 className="ml-10">First name => {firstName}</h3>
      <h3 className="ml-10">Last name => {lastName}</h3>
      <h3 className="ml-10">Gender => {gender}</h3>
      <h3 className="ml-10">"Height => {height}</h3>
      <h3 className="ml-10">Birth => {birth.toDateString()}</h3>
    </div>
  </div>
)

export default IdCard