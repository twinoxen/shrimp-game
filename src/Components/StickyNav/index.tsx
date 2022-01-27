import React from 'react';
import { IconContext } from 'react-icons';
import { BsPatchCheck, BsWallet } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { IonFooter, IonCol, IonToolbar, IonRow } from '@ionic/react';
import * as auth from '../../lib/auth';

function StickyNav({ toggleModal, toggleWalletModel }) {
  return (
    <IonFooter className="justify-content-center">
      <IconContext.Provider value={{size: '3em'}}>
        <IonToolbar>
          <IonRow className="ion-justify-content-center">
            <IonCol size-xs={3} className="ion-text-center">
              <BsWallet onClick={() => toggleWalletModel()}/>
            </IonCol>
            <IonCol size-xs={3} className="ion-text-center">
              <BsPatchCheck onClick={() => toggleModal()} />
            </IonCol>
            <IonCol size-xs={3} className="ion-text-center">
              <FiLogOut onClick={auth.logout} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IconContext.Provider>
    </IonFooter>
  )
}

export default StickyNav;