import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

import DivisorBar from '../../components/divisorBar';

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
                <View style={styles.perfilContainer}>
                    <Image 
                        style={styles.perfilAvatar}
                        source={{uri: "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"}}
                    />

                    <View style={styles.perfilInfoContainer}>
                        <Text style={[styles.perfilName]}>Vitor</Text>
                        <Text style={styles.perfilCaption}>Band</Text>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.infoRow}>
                    <Icon name="map-marker-radius" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>Rua pompeira, 58 - Osasco - SP</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="phone" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>+55 11 3658-9245</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="email" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>barDoze@email.com</Text>
                </View>
            </View>

            <DivisorBar/>

            <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={vaiParaEditProfile}>
                    <View style={styles.menuItem}>
                        <Icon name="settings-outline" size={25} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Editar informações</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="lock-outline" size={25} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Alterar senha</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" size={25} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Favoritos</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={sair}>
                    <View style={styles.menuItem}>
                        <Icon2 name="sign-out-alt" size={23} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DetailsProfileContratante;