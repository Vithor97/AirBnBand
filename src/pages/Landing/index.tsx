import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';


import styles from './styles';
import AuthContext from '../../contexts/auth';

function Landing () {
    const { signOut, user, usuario } = useContext(AuthContext);

    function handleSignOut() {
      signOut();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>AirBnBand 5</Text>
            <Text>oi, {usuario}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    )
}

export default Landing;