import React, { useState, useEffect } from 'react';
import {
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

function SquadList() {
    /*
    * {
      "time_id": 702,
      "nome_popular": "Atlético-MG",
      "nome": "Clube Atlético Mineiro",
      "sigla": "CAM",
      "apelido": "Galo"
    }
    */
  
    const [squad, setSquadList] = useState();
    // TODO: Move token to injector
    const headers = {
      'Authorization': 'Bearer test_6cf061b1205de9f47e35f36455ad20'
    }

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.api-futebol.com.br/v1/times/702/', { headers })
            .then(response => response.json())
            .then(data => setSquadList(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
      <IonGrid>
        <IonRow>
          <IonCol
            size={'12'}>
            <p>{ JSON.stringify(squad) }</p>
          </IonCol>
      </IonRow>
    </IonGrid>
    );
}

export { SquadList };