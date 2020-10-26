import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import BackArrow from '../../components/backArrow';

import styles from './styles';

function DetailsProfile(){

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
                            <Text style={styles.artistName}>Adelson Betoneira</Text>
                        </View>
            
                        <View  style={styles.avatarContainer}>
                            <Image
                                source={require('../../resources/Icons/photo_laranja.png')}
                                style={styles.avatarImage}
                            />
                        </View>
                    </View>

                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentText}>Estilo musical: Pisadinha</Text>
                    </View>

                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentText}>Bio:</Text>

                        <Text style={styles.contentText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, officia dolorum, est quis impedit et at atque,
                            repellat illum voluptatum nisi sunt omnis velit? Quae ad quos et velit corrupti.
                        </Text>
                    </View>
                    
                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentText}>Email para contato:</Text>

                        <Text style={styles.contentText}>
                            contato.adelson.betoneira@mail.com
                        </Text>
                    </View>
                    
                    <View style={styles.contentLabelContainer}>
                        <Text style={styles.contentText}>Quantidade de integrantes: 7</Text>
                    </View>
        
                    <Text style={styles.contentText}>Estados:</Text>

                    <View style={styles.estadosContainer}>                    
                        <Text style={styles.contentText}>SP</Text>
                        
                        <Text style={styles.contentText}>RJ</Text>

                        <Text style={styles.contentText}>MG</Text>
                    </View>
                    
                    <View style={styles.instagramWhatsAppContainer}>
                        <Text style={styles.contentText}>Instagram:</Text>
            
                        <Text style={styles.contentText}>WhatsApp:</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailsProfile;