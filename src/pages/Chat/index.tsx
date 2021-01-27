import React, { useState, useCallback, useEffect, useContext }  from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native'
import AuthContext from '../../contexts/auth'
import api from '../../services/api'

import dados from '../../utils/data'

const Chat: React.FC<any> = ({route}) => {

    const [messagess, setMessages] = useState([]);
    const [chatId, setChatId] = useState('');
    const [users, setUsers] = useState<any>([]);

    const { usuario } = useContext(AuthContext);
    const dadosUsuario: any = usuario

    const usuario2: any = route.params;
    let { idChat } = route.params

    useEffect(() => {
      setUsers([dadosUsuario.nome,usuario2.nome])
      console.log(`Valor do chatid: ${chatId}`)

      if(idChat !== '' || idChat !== undefined){
        let sub = api.onChatContent(idChat, setMessages, users)
        return sub
      }

      if(chatId === '' || chatId == undefined){
        return
      }
      else{
        setUsers([])
        let unsub = api.onChatContent(chatId, setMessages, users)
        return unsub
      }
      
    }, [chatId])

     useEffect(() => {
      setChatId(idChat)
    }, [])
  
    const onSend = useCallback(async (messages = []) => {
      
      if(!messagess.length && Array.isArray(messagess)){
        console.log('Não tem menssagens')
        await api.newChatUsers(dadosUsuario, usuario2, messages[0].text, setChatId)
      }

      //implementar o envio de mensagens

      
      return setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
      
        <GiftedChat
         listViewProps={{
          style: {
            backgroundColor: '#FFFFFF',
          },
          }}
          messages={messagess}
          onSend={messages => onSend(messages)}
          user={{
            _id: dadosUsuario.id,
          }}
          showUserAvatar={true}
          
        />

    )
}

export default Chat
