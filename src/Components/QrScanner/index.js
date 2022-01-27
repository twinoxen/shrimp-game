import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { Player } from 'video-react';
import { houseData } from '../../houseData';
import { checkUser, saveCheckin } from '../../lib/db';

function QrScanner() {
  const [house, setHouse] = useState({});
  const [isScanned, setIsScanned] = useState(false);

  const handleScan = async (data) => {
    if (data) {
      const myArray = data.split('house_');
      const houseId = myArray[1].toString();
      console.log(`Scanned house: ${houseId}`);

      let house;
      houseData.forEach((item) => {
        if (item.id === parseInt(houseId)) {
          house = item;
        }
      });

      const token = localStorage.getItem('token');

      setHouse(house);
      console.log('this is the houseid', token);
      console.log('this is the token', token);
      try {
        const userData = await checkUser(token);
        console.log('this is the userData', userData);
        // userData.visitedHouses
        userData.visitedHouses.push(parseInt(houseId));
        const result = await saveCheckin(token, userData.visitedHouses);
        console.log('result', result);

        setIsScanned(true);

        // Save scan in database database
      } catch (err) { return err; }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

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
        {isScanned ? house.name : 'Scan spot QR code'}
        {isScanned && ' NFT collected! 🎉'}
      </p>

      {isScanned && (
        <video autoPlay style={{ width: '100%' }}>
          <source src={house.video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default QrScanner;
