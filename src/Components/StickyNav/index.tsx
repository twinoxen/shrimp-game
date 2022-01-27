import React from 'react';
import { Nav } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsPatchCheck, BsWallet } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { IonFooter, IonCol, IonToolbar, IonRow } from '@ionic/react';

function StickyNav({ toggleModal }) {
  return (
    <IonFooter className="justify-content-center">
      <IconContext.Provider value={{size: '3em'}}>
        <IonToolbar>
          <IonRow className="ion-justify-content-center">
            <IonCol size-xs={3} className="ion-text-center">
              <BsWallet />
            </IonCol>
            <IonCol size-xs={3} className="ion-text-center">
              <BsPatchCheck onClick={() => toggleModal()} />
            </IonCol>
            <IonCol size-xs={3} className="ion-text-center">
              <BiUserCircle />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IconContext.Provider>
    </IonFooter>
  );
}

export default StickyNav;
