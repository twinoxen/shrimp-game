/* eslint-disable max-len */
import React, { useState } from 'react'
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
  IonAvatar,
} from '@ionic/react'
import StickyNav from '../StickyNav'
import { houseData } from '../../houseData'

import defaultImg from '../../assets/logo2.jpeg'

function HouseCard({ verified, houseObj }) {
  if (!houseObj) return null
  const img = verified ? houseObj.nft : defaultImg
  return (
    <IonContent>
      <IonItem>
        <IonAvatar slot="start">
          <img src={img} />
        </IonAvatar>
        <IonLabel>{houseObj.name}</IonLabel>
      </IonItem>
    </IonContent>
  )
}

export default HouseCard
