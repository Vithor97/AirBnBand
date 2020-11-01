import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native';

import Api from '../../services/api'

import strings from '../../resources/values/strings.json';

import { YellowBox } from 'react-native';
import AttractionCard from '../../components/attractionCard';

YellowBox.ignoreWarnings(['Setting a timer']);

import styles from './styles';
import AuthContext from '../../contexts/auth';
import api from '../../services/api';

console.ignoredYellowBox = [
    'Setting a timer'
]

function Landing () {
    const [useer, setUseer] = useState([]);
    const { signOut, user, usuario } = useContext(AuthContext);
    const [dados, setDados] = useState([])

    useEffect(() => {
        setDados([])
        let chama = Api.pegaArtistas(setDados)
        return chama
    }, [])
    
    function handleSignOut() {
      signOut();
    }

    async function pegaTipos(){

        const a =  await Api.pegaUsuarios();
        //console.log(a)
        setUseer(a)
       
        await useer.forEach((elemento: any) => {
            console.log(elemento.email)
        })

        //setUseer([])
        // const user =  db.collection('users').where("tipo", "==", "artista").get()
        // user.then(values =>{
        //     values.docs.forEach(e => {
        //         setUseer((searches:any) => [...searches, e.data()])
        //     })
        // })
    }

    function pegaEstado(){
        console.log(useer) 
    }

    async function pegaDadosFirebase(){

        const values = await Api.pegaEnderecos();
        console.log(values)
        // let userRef = db.collection('users').doc('hDLVRtGE4iZsrHxG3RRVyjTxD5k1')
        
        // let getDoc = userRef.collection('endereco').where("estado","==", "SP").get()

        // getDoc.then(snapshot =>{
        //     const values = snapshot.docs.map((val)=>{
        //         return val.id
        //     })
        //     console.log('---------------------------------------')
        //     console.log(values)
        // })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{strings.app_name}</Text>
            {/* {console.log(dados)} */}
            <ScrollView style={styles.attractionCardsContainer}>
                {
                    dados.map((m:any) => {
                        return <AttractionCard key={m.id} dados = {m}/>
                    })
                }
            </ScrollView>
            {/* <View>
                <Button title ="oi" onPress={pegaDadosFirebase}/>
            </View>
            <View>
                <Button title ="estado" onPress={pegaEstado}/>
            </View> */}
        </View>
    )
}

export default Landing;