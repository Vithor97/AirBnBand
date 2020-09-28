import React, { useContext, useState } from 'react'
import { View, Text, Button } from 'react-native';
import base from '../../../firebase'

import strings from '../../resources/values/strings.json';

import { YellowBox } from 'react-native';
import AttractionCard from '../../components/attractionCard';
import DefaultButton from '../../components/defaultButton';

YellowBox.ignoreWarnings(['Setting a timer']);

import styles from './styles';
import AuthContext from '../../contexts/auth';

console.ignoredYellowBox = [
    'Setting a timer'
]

function Landing () {
    const [useer, setUseer] = useState<any>([]);
    const { signOut, user, usuario } = useContext(AuthContext);

    const db = base.firestore()

    function handleSignOut() {
      signOut();
    }

    function pegaTipos(){
        //var va = new Array()
        const user =  db.collection('users').where("tipo", "==", "artista").get()
        user.then(values =>{
            values.docs.forEach(e => {
              
                setUseer((searches:any) => [...searches, e.data()])
            })
        })
          
    }

    
    function pegaEstado(){
        //var va = new Array()
        console.log(useer)
        setUseer([])
          
    }

    function pegaDadosFirebase(){
        //console.log('funcão pegaDadosFirebase')
        
  
        let userRef = db.collection('users').doc('hDLVRtGE4iZsrHxG3RRVyjTxD5k1')
        
        
        let getDoc = userRef.collection('endereco').where("estado","==", "SP").get()
        // let outros = userRef.collection('endereco')

        // let grupos = db.collection('endereco').where("estado","==", "SP").get()
        // .then(function (querySnapshot) {
        //   return querySnapshot.forEach(t =>{
        //       return t.data()
        //   })
        // });

        // console.log("------------------------------------------------------------")
        // console.log(grupos)

        getDoc.then(snapshot =>{
            const values = snapshot.docs.map((val)=>{
                return val.id
                // return {
                //     cidade: val.data().cidade,
                //     estado: val.data().estado
                // }
            })
            console.log('---------------------------------------')
            console.log(values)
        })
        //console.log(userRef)

        //.doc('SF');
        // let getDoc = cityRef.get()
        // .then(doc => {
        //     if (!doc.exists) {
        //     console.log('No such document!');
        //     } else {
        //     console.log('Document data:', doc.data());
        //     }
        // })
        // .catch(err => {
        //     console.log('Error getting document', err);
        // });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{strings.app_name}</Text>

            <AttractionCard />

            {/* <Text>oi, {usuario}</Text> */}

            <DefaultButton text={strings.signOut} doIt={handleSignOut}/>
            {/* <Button title="Sign Out" onPress={handleSignOut} />
            {} */}

            {/* <DefaultButton text={"Pega dados"} doIt={pegaTipos}/> */}
            {/* <Button title="Pega dados" onPress={pegaTipos} />
            {} */}

            {/* <DefaultButton text={"Pega estado"} doIt={pegaEstado}/> */}
            {/* <Button title="Pega estado" onPress={pegaEstado} /> */}
        </View>
    )
}

export default Landing;