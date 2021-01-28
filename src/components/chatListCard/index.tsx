import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

const ChatListCard : React.FC<any> = ({dados, navigation}) => {

    const { goBack,navigate } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    function goToProfileDetails(){
        
        navigate('Chat', {id:dados.id, nome:dados.nome, idChat:dados.chatId});
        
    }

    return (
        <View  style={styles.attractionCardContainer}>
            <TouchableOpacity style={styles.attractionCardButton}  onPress={goToProfileDetails}>
                <View style={styles.imageContainer}>
                    <View style={styles.atractionImageBallFormContainer}>
                        <Image
                            source={{uri: dados.avatar}}
                            style={styles.atractionImage}
                        />  
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.attractionNameText}>{dados.nome}</Text>
                    <Text numberOfLines={1} style={styles.attractionTypeText}>{dados.lastMessage}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ChatListCard;