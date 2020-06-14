import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Table.scss';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galo Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Galo Stats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Future content: Table" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
