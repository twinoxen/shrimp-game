/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
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
} from '@ionic/react'
import StickyNav from '../StickyNav'
import HouseCard from '../HouseCard'

import { houseData } from '../../houseData'

function UserHome({ toggleModal }) {
  const [fullscreen, setFullscreen] = useState(true)
  const [verifiedHouses, setVerifiedHouses] = useState([])
  const [otherHouses, setOtherHouses] = useState([])

  useEffect(() => {
    const usrHouseIds = Array.from(new Set([1,8,9]))

    let verifiedSet = new Set()
    let otherSet = new Set()
    houseData.forEach((house) => {
      if (usrHouseIds.includes(house.id)) {
        console.log(house)
        console.log('Verified house: ' + house.name)
        verifiedSet.add(house)
      } else {
        otherSet.add(house)
      }
    })

    setVerifiedHouses(Array.from(verifiedSet))
    setOtherHouses(Array.from(otherSet))

    console.log(verifiedHouses)
  }, []);
  

  return (
    <IonPage>
      <IonContent>
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
                          <HouseCard verified={true} houseObj={item} />
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
      </IonContent>
      <StickyNav toggleModal={toggleModal} />

      {/* <StickyNav key={0} toggleModal={toggle.bind(this)} /> */}
    </IonPage>
  )
}

export default UserHome
