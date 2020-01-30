import React from 'react'
import QRCode from 'qrcode'

const QRCodeGenerator = () => {
  console.log(QRCode.create())
  return (
    // QR.toDataURL('I am a pony!')
    //   .then(url => {
    //     console.log(url)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })

    QRCode.toFile('./filename.png', 'Some text', {
      color: {
        dark: '#00F',  // Blue dots
        light: '#0000' // Transparent background
      }
    }, function (err) {
      if (err) throw err
      console.log('done')
    })
  )
}

export default QRCodeGenerator