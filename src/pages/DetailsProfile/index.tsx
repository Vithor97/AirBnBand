import React from 'react'
import { View, Text, Image, ScrollView, Linking, TouchableHighlight } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import BackArrow from '../../components/backArrow';

import styles from './styles';

import whatsappIcon from '../../resources/Icons/whatsapp2.png'

const DetailsProfile : React.FC<any> = ({route, navigation}) => {
    
    const 
    { 
        nome, 
        bio, 
        cnpj, 
        email, 
        contatoVisivel,
        estiloMusical,
        instagram,
        nomeArtistico,
        qtdIntegrantes,
        selectEstados,
        telefone,
        tipoUsuario,
        avatar    
    } = route.params;


    
    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${telefone}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <View style={styles.backArrowContainer}> */}
                    <BackArrow/>
                {/* </View> */}
            </View>

            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.nameAvatarContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.artistName}>{nome}</Text>
                        </View>
            
                        <View  style={styles.avatarContainer}>
                            <Image
                                source={{uri:avatar}}
                                style={styles.avatarImage}
                            />
                        </View>
                    </View>

                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentLabel}>Estilo musical: </Text>
                        <Text style={styles.contentText}>{estiloMusical}</Text>
                    </View>

                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentLabel}>Bio:</Text>

                        <Text style={styles.contentText}>
                                {bio}
                        </Text>
                    </View>
                    
                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentLabel}>Email para contato:</Text>

                        <Text style={styles.contentText}>
                            {email}
                        </Text>
                    </View>
                    
                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentLabel}>Quantidade de integrantes: </Text>
                        <Text style={styles.contentText}>{qtdIntegrantes}</Text>
                    </View>
        
                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentLabel}>Estados onde atua:</Text>

                        <View style={styles.estadosContainer}>
                            {
                                selectEstados.map((m:any) => {
                                    return <Text key={m} style={styles.estadoContainer}>{m}</Text>
                                })
                            }
                        </View>
                    </View>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                    
                    <View style={styles.socialMediaContainer}>
                        <Image 
                            source={require('../../resources/Icons/instagram.png')}
                            style={styles.socialMediaIcon}
                        />

                        <Text style={styles.contentText}>Instagram:</Text>
                    </View>

          
        
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailsProfile;