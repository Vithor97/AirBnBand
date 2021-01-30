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
      
      if(idChat !== undefined && idChat !== ''){
        console.log(`Valor do idChat: ${idChat}`)
        let sub = api.onChatContent(idChat, setMessages, users)
        return sub
      }
      
      if(chatId !== undefined && chatId !== '' ){
        console.log(`Valor do chatid: ${chatId}`)
        setUsers([])
        let unsub = api.onChatContent(chatId, setMessages, users)
        return unsub
      }
      
    }, [chatId])

      const onSendd = (messages: any) => {
      console.log(`Tem ${messagess.length} mensagens`)
      console.log(messages)
      if(messagess.length === 0  && Array.isArray(messagess)){
        console.log('Não tem menssagens')
        
      }
      else{
        console.log('tem mensagens')
      }

      
      return setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }

  
    const onSend = useCallback(async (messages = []) => {
      console.log(`Tem ${messagess.length} mensagens`)
      if(messagess.length === 0  && Array.isArray(messagess)){
        console.log('Não tem menssagens')
        await api.newChatUsers(dadosUsuario, usuario2, messages[0].text, setChatId)
      }
      else{
        console.log('tem mensagens')
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
          onSend={messages => onSendd(messages)}
          user={{
            _id: dadosUsuario.id,
          }}
          showUserAvatar={true}
          
        />

    )
}

export default Chat
