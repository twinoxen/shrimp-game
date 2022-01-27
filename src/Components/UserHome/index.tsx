/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonImg
} from '@ionic/react';
import StickyNav from '../StickyNav';
import HouseCard from '../HouseCard';
import Logo from '../../assets/shrimpgamepink.png'

import { houseData } from '../../houseData';

function UserHome({ user, toggleModal, toggleWalletModel }) {
  const [verifiedHouses, setVerifiedHouses] = useState([]);
  const [otherHouses, setOtherHouses] = useState([]);
  const [usrHouseIds, setUsrHouseIds] = useState([]);

  useEffect(() => {
    if (user.visitedHouses && Array.isArray(user.visitedHouses)) {
      let houses = Array.from(new Set(user.visitedHouses));
      console.log('thses are the houses', houses)
      setUsrHouseIds(houses);
    }
  },[user])

  useEffect(() => {

    const verifiedSet = new Set();
    const otherSet = new Set();
    houseData.forEach((house) => {
      if (usrHouseIds.includes(house.id)) {
        console.log(house);
        console.log(`Verified house: ${house.name}`);
        verifiedSet.add(house);
      } else {
        otherSet.add(house);
      }
    });

    setVerifiedHouses(Array.from(verifiedSet));
    setOtherHouses(Array.from(otherSet));

    console.log(verifiedHouses);
  }, [usrHouseIds]);

  return (
    <IonPage>
      <IonContent>
        <IonGrid >
          <IonRow className="ion-justify-content-center ion-margin-vertical" style={{background: 'black'}}>
            <IonImg src={Logo} alt="shrimp games logo" className="ion-margin-vertical"/>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size-md={6}>
              {/* visitedHouses */}
              <IonCard>
                <IonAccordionGroup>
                  <IonAccordion value="visitedHouses">
                    <IonItem slot="header" className="padding-vertical">
                      <IonLabel className="padding-vertical">
                        Visited Spots
                      </IonLabel>
                    </IonItem>

                    <IonList slot="content">
                      {verifiedHouses.map((item: any) => (
                        <IonItem key={item.id}>
                          <HouseCard verified houseObj={item} />
                        </IonItem>
                      ))}
                    </IonList>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonCard>

              {/* unvisitedHouses */}
              <IonCard className="ion-align-self-end">
                <IonAccordionGroup>
                  <IonAccordion value="unvisitedHouses">
                    <IonItem slot="header" className="padding-vertical">
                      <IonLabel>Spots to Visit</IonLabel>
                    </IonItem>

                    <IonList slot="content">
                      {otherHouses.map((item: any) => (
                        <IonItem key={item.id}>
                          <HouseCard verified={false} houseObj={item} />
                        </IonItem>
                      ))}
                    </IonList>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol className="ion-center-text">
              <h2 className="ion-center-text">Notes on the Game</h2>
                <li>Click the Check Mark below to Scan In!</li>
                <li>NFT Minting Instructions will be emailed to you after the game ends!</li>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <StickyNav
        toggleModal={toggleModal}
        toggleWalletModel={toggleWalletModel}
      />

      {/* <StickyNav key={0} toggleModal={toggle.bind(this)} /> */}
    </IonPage>
  );
}

export default UserHome;
