import React, {useEffect, useState, useContext} from 'react'
import { View, Text, FlatList, ListRenderItem,TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { ListItem, SearchBar, ListItemProps,   } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../../contexts/auth'
import api from '../../../services/api'
import styles from './styles';

import ChatListCard from '../../../components/chatListCard'

const Item = ({ item, onPress, style }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={styles.lines}>

            <View style={styles.chatListItemLine}>
              <View style={styles.atractionImageBallFormContainer}>
                  <Image
                      source={{uri: item.avatar}}
                      style={styles.atractionImage}
                  />  
              </View>
            </View>
            
            <View style={styles.chatListItemLine}>
                <Text style={styles.title}>{item.nome}</Text>
                <Text numberOfLines={1} style={styles.lastMessage}>{item.lastMessage}</Text> 
            </View>
            <View style={styles.chatListItemLine}>
                <Text>10:20</Text>
            </View>    
        </View>
    </TouchableOpacity>
);


const ListChat: React.FC<any>  =({navigation}) =>{
    

    const { usuario } = useContext(AuthContext);
    const dadosUsuario: any = usuario
   

    const [data, setData] = useState([])
    const [selectedId, setSelectedId] = useState(null);

    useEffect(()=>{
        async function getDados(){
            setData([])
            await api.onChatList(dadosUsuario.id, setData);
        }

        getDados()
    }, [])



    const handleToChat = (idChat:any, nome: any)=>{
        navigation.navigate('Chat', {id: dadosUsuario.id, nome: nome, idChat: idChat})
    }
    const handleToChatt = (idChat:any, nome: any)=>{
      
    }
    


    const renderItem = ({ item } :any) => {
        //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        //console.log(data)
        return <Item item={item} onPress={() =>handleToChat(item.chatId, item.nome)} />;
      };
      

    return (
        // <SafeAreaView style={styles.container}>
        //   <FlatList
        //     data={data}
        //     renderItem={renderItem}
        //     keyExtractor={item => item.id}
        //     extraData={selectedId}
        //   />
            

        // </SafeAreaView >

        <View style={styles.container}>
          <ScrollView style={styles.attractionCardsContainer}>
              {data.map((m:any)=>{
                return <ChatListCard key={m.id} dados={m}/>
              })}
          </ScrollView>
        </View>
    )
}

export default ListChat;
