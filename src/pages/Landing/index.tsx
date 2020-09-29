import React, { useContext, useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
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
        const user =  db.collection('users').where("tipo", "==", "artista").get()
        user.then(values =>{
            values.docs.forEach(e => {
                setUseer((searches:any) => [...searches, e.data()])
            })
        })
    }

    function pegaEstado(){
        console.log(useer)
        setUseer([])
    }

    function pegaDadosFirebase(){
        let userRef = db.collection('users').doc('hDLVRtGE4iZsrHxG3RRVyjTxD5k1')
        
        let getDoc = userRef.collection('endereco').where("estado","==", "SP").get()

        getDoc.then(snapshot =>{
            const values = snapshot.docs.map((val)=>{
                return val.id
            })
            console.log('---------------------------------------')
            console.log(values)
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{strings.app_name}</Text>

            <ScrollView style={styles.attractionCardsContainer}>
                <AttractionCard />
            
                <AttractionCard />
            
                <AttractionCard />

                <AttractionCard />
            
                <AttractionCard />
            
                <AttractionCard />
            </ScrollView>
        </View>
    )
}

export default Landing;