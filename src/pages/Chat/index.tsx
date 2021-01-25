import React, { useState, useCallback, useEffect, useContext }  from 'react';
import { GiftedChat } from 'react-native-gifted-chat'

import AuthContext from '../../contexts/auth'
import api from '../../services/api'

import dados from '../../utils/data'

const Chat: React.FC<any> = ({route}) => {

    const [messages, setMessages] = useState([]);
    const { usuario } = useContext(AuthContext);
    const dadosUsuario: any = usuario

    const {   
        id,
        nome
    } = route.params;

    useEffect(() => {
      console.log(`id do user :${id} --- nome: ${nome}`)
      setMessages(dados.sort(function(a: any, b: any){return b._id - a._id}))
      //setMessages(dados)
    }, [])
  
    const onSend = useCallback(async (messages = []) => {
      await api.addNewField(dadosUsuario.id)
      return setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 'x',
        }}
        showUserAvatar={true}
        
      />
    )
}

export default Chat
