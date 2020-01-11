import React from 'react'

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor = ({ r, g, b }) => (
  <div style={{ background: `rgb(${r},${g},${b})` }}>
    <p>rgb({r},{g},{b})<br></br>{rgbToHex(r, g, b)}</p>
  </div>
)

export default BoxColor