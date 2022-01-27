import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Player } from 'video-react'
import {houseData} from '../../houseData'



function QrScanner() {
  const [houseId, setHouseId] = useState(69)
  const [isScanned, setIsScanned] = useState(false)

  const handleScan = (data) => {
    if (data) {
      const myArray = data.split('house_')
      const houseId = myArray[1].toString()
      console.log('Scanned house: ' + houseId)
      setHouseId(houseId)

      setIsScanned(true)

      // Save scan in database database

    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div style={{}}>
      {!isScanned && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      )}

      <p>
        {houseData[houseId].name}
        {isScanned && ' NFT collected! 🎉'}
      </p>

      {isScanned && (
        <video autoPlay style={{ width: '100%' }}>
          <source src={houseData[houseId].video} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default QrScanner
