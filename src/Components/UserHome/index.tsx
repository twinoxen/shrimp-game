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
  IonRefresher,
  IonRow,
  RefresherEventDetail,
} from '@ionic/react';
import StickyNav from '../StickyNav';
import HouseCard from '../HouseCard';

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

  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonPage>
      <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
          <IonGrid>
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
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRefresher>
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
