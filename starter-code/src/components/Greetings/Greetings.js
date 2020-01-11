import React from 'react'
import './Greetings.css'

const greeting = {
  de: "Hallo",
  en: "Hi",
  es: "Hola",
  fr: "Bonjour"
}

const Greetings = ({lang, children}) => (
  <div>
    <p>{greeting[lang]}, {children}</p>
  </div>
)

export default Greetings