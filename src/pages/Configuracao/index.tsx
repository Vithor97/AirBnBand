import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, KeyboardAvoidingView ,Platform } from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import AuthContext from '../../contexts/auth';

import colors from '../../resources/values/colors.json';


function Configuracao(){
    const { signOut, user, usuario } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }

    return (
        
        <View style={styles.container}>
            <KeyboardAvoidingView  behavior="padding">
                <ScrollView  style={{margin:10}}>
                    <View style={{margin: 7}}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity onPress={()=>{}}>
                                <View style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                <ImageBackground 
                                    style={styles.avatar}
                                    imageStyle={{borderRadius: 15}}
                                    source={{uri: "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_1920x1200.jpg"}}
                                >
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Icon 
                                            name="camera" 
                                            size={35} 
                                            color="#fff"
                                            style={{
                                                opacity: 0.7,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderWidth: 1,
                                                borderColor: '#fff',
                                                borderRadius: 10
                                            }}
                                        />
                                    </View>
                                </ImageBackground>

                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                                Vitor Miranda
                            </Text>
                
                        </View>
                                    

                        
                                <View style={styles.action}>
                                    <FontAwesome name="user-o" size={20} />
                                    <TextInput
                                        placeholder="Nome"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                    />                
                                </View>
                                    
                                <View style={styles.action}>
                                    <FontAwesome name="user-o" size={20} />
                                    <TextInput
                                        placeholder="Sobrenome"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                    />                
                                </View>
                                <View style={styles.action}>
                                    <Feather name="phone" size={20} />
                                    <TextInput
                                        keyboardType='number-pad'
                                        placeholder="Telefone"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                    />                
                                </View>
                                <View style={styles.action}>
                                    <FontAwesome name="envelope-o" size={20} />
                                    <TextInput
                                        placeholder="Email"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                    />                
                                </View>
                                <Text style={{left: '40%', fontSize: 15, fontWeight: 'bold'}}>localização</Text>
                                <View style={{
                                    borderBottomWidth: 3,
                                    borderBottomColor: colors.primary,
                                    paddingBottom: 5,
                                    marginTop: 6,
                                    marginBottom: 7
                                }
                                }></View>
                                
                                <Text>Rua: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        placeholder="Endereço"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                    />                
                                </View>

                                <Text>Cidade: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        placeholder="Cidade"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                    />                
                                </View>
                                
                                <View style={{position: 'relative'}}>
                                    <TouchableOpacity style={styles.commandButton}>
                                        <Text style={styles.panelButtonTitle}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>

    )
}

export default Configuracao;