import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../../contexts/auth';

import DivisorBar from '../../../components/divisorBar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

import styles from './styles';

function DetailsProfileArtista(){

    const { navigate } = useNavigation();
    const { signOut, usuario } = useContext(AuthContext);

    const dadosUsuario: any = usuario

    function vaiParaEditProfile(){
        navigate('EditPerfilArtista');
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
                        source={{uri: dadosUsuario.avatar}}
                    />

                    <View style={styles.perfilInfoContainer}>
                        <Text style={[styles.perfilName]}>{dadosUsuario.nomeArtistico}</Text>
                        <Text style={styles.perfilCaption}>{dadosUsuario.estiloMusical}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.infoRow}>
                    <Icon name="account-group" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>{dadosUsuario.qtdIntegrantes} Integrantes</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="phone" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>+55 {dadosUsuario.telefone}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="email" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>{dadosUsuario.email}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="instagram" size={20} style={styles.infoIconContainer}/>
                    <Text style={styles.iconText}>{dadosUsuario.instagram}</Text>
                </View>   
            </View>

            <DivisorBar/>

            <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={vaiParaEditProfile}>
                    <View style={styles.menuItem}>
                        <Icon name="settings-outline" size={22} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Editar informações</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Icon name="lock-outline" size={22} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Alterar senha</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={sair}>
                    <View style={styles.menuItem}>
                        <Icon2 name="sign-out-alt" size={22} style={styles.optionIconContainer}/>

                        <Text style={styles.menuItemText}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DetailsProfileArtista;