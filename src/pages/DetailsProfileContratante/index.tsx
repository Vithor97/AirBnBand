import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

import styles from './styles';

function DetailsProfileContratante(){

    const { navigate } = useNavigation();
    const { signOut } = useContext(AuthContext);

    function vaiParaEditProfile(){
        navigate('Configuracao');
    }

    function sair(){
        signOut();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row', marginTop: 15}}>
                <Image 
                    style={styles.avatar}
                    source={{uri: "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"}}
                />
                <View style={{marginLeft: 20}}>
                    <Text style={[styles.title, {marginTop: 15 , marginBottom: 5}]}>Vitor</Text>
                    <Text style={styles.caption}>band</Text>
                </View>

                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" size={20} color="#777777"/>
                    <Text style={{color: "#777777", marginLeft: 15}}>Rua pompeira, 58 - Osasco - SP</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" size={20} color="#777777"/>
                    <Text style={{color: "#777777", marginLeft: 15}}>+55 11 3658-9245</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" size={20} color="#777777"/>
                    <Text style={{color: "#777777", marginLeft: 15}}>barDoze@email.com</Text>
                </View>
            </View>

            <View style={[styles.menuWrapper, {      
                borderBottomColor: '#989C98',
                borderTopColor: '#989C98',
                borderTopWidth: 3,}]}>
                <TouchableOpacity onPress={vaiParaEditProfile}>
                    <View style={styles.menuItem}>
                        <Icon color="#FF6347" name="settings-outline" size={25}/>
                        <Text style={styles.menuItemText}>Editar informações</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon color="#FF6347" name="lock-outline" size={25}/>
                        <Text style={styles.menuItemText}>Alterar senha</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon color="#FF6347" name="heart-outline" size={25}/>
                        <Text style={styles.menuItemText}>Favoritos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={sair}>
                    <View style={styles.menuItem}>
                        <Icon2 color="#FF6347" name="sign-out-alt" size={23}/>
                        <Text style={styles.menuItemText}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DetailsProfileContratante;