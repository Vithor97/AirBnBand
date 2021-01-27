import React, {useEffect, useState, useContext} from 'react'
import { View, Text, FlatList, ListRenderItem,TouchableOpacity, SafeAreaView  } from 'react-native'
import { ListItem, SearchBar, ListItemProps,   } from "react-native-elements";
import AuthContext from '../../../contexts/auth'
import api from '../../../services/api'
import styles from './styles';

const Item = ({ item, onPress, style }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={styles.lines}>
            
            <View style={styles.chatListItemLine}>
                <Text style={styles.title}>{item.nome}</Text> 
            </View>
            <View style={styles.chatListItemLine}>
                <Text>10:20</Text>
            </View>    
        </View>
    </TouchableOpacity>
);

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    
];

const ListChat: React.FC<any>  =({navigation}) =>{

    const { usuario } = useContext(AuthContext);
    const dadosUsuario: any = usuario

    const [data, setData] = useState()
    const [selectedId, setSelectedId] = useState(null);

    // useEffect(()=>{
    //     const url = `https://randomuser.me/api/?seed=${1}&page=${1}&results=20`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //       setData(res.results)
    //     })
    //     .catch(error => {
          
    //     });
    // },[])

    useEffect(()=>{
        async function getDados(){

            let unsub = await api.onChatList(dadosUsuario.id, setData);

            return unsub;
        }

        getDados()
    }, [])

    const handleToChat = (idChat:any, nome: any)=>{
        navigation.navigate('Chat', {id: dadosUsuario.id, nome: nome, idChat: idChat})
    }
    


    const renderItem = ({ item } :any) => {
        //const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        //console.log(data)
        return <Item item={item} onPress={() =>handleToChat(item.chatId, item.nome)} />;
      };
      

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
            

        </SafeAreaView >
    )
}

export default ListChat;
