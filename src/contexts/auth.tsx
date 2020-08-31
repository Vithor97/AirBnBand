import React, { createContext, useState, useEffect } from "react";
import * as auth from "../services/auth";

import api from "../services/api";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "../routes/AuthStack.routes";
import { AxiosResponse } from "axios";


//Firebase
import base from '../../firebase'

interface User {
    name: string;
    email: string;
}
interface Usuario {
    email: string;
    senha: string;
}

  
interface AuthContextData {
    signed: boolean;
    user: User | null;
    usuario: null | string | undefined ,
    signIn(): Promise<void>;
    logar(email: string, senha:string): Promise<void>;
    signOut(): void;
    loading: boolean;
}

//Estou criando o contexto que vai disponibilizar dados para outros componentes
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) =>{

    const [user, setUser] = useState<User | null >(null);
    const [loading, setLoading] = useState(true);

    const [usuario, setUsuario] = useState<null | string | undefined>('');

    //verifica se usuario está logado ou não
    const [logado, setLogado] = useState(false)

    //----------É criado na criação do component e deixa o usuario salvo no AsyncStorage----------//

    // useEffect(() => {
    //     async function loadStorageData() {
    //       const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
    //       const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
    
    //       // simular uma lentidão para mostar o loading.
    //       //await new Promise((resolve) => setTimeout(resolve, 2000));
    
    //       if (storagedUser && storagedToken) {
    //         setUser(JSON.parse(storagedUser));
    //         api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
    //       }
    //       setLoading(false);
    //     }
    
    //     loadStorageData();
    //   });

    //----------------------------------------------------------------------------------------------//

    //Funções que vão ser fornecidas a escopo global
    async function signIn() {
        const response = await auth.signIn(); //depois fazer usando api mesmo
        setUser(response.user);

        console.log(response)
    
        api.defaults.headers.Authorization = `Baerer ${response.token}`;
    
        // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        // await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    // async function logar(email: string, senha: string) {

    //     try {
    //         const response = await api.post('login', {
    //             user: email,
    //             password: senha
    //         })

    //         if (response.data){
       
    //             console.log(response.data)
    //             setUsuario(response.data.user)
    //             setLogado(true);
                
    //             api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
    //         }else{
    //             alert("Sem dados do sevidor")
    //         }
            
            
    //     } catch (error) {
    //         alert('errro ao achar usuario')
    //     }
    
    // }

    async function logar(email: string, senha: string) {

        try {

            let userr = await base.auth().signInWithEmailAndPassword(email, senha)
            console.log(userr)
            var valor = userr.user?.email
            setUsuario(valor)
            setLogado(true)
            
        } catch (error) {
            alert('errro ao achar usuario')
        }
    
    }
    
    async function signOut() {
        //await AsyncStorage.clear() 
        setLogado(false)
        //setUser(null);
    }
    // Retorno todas as variaveis ou funções para que os outros componentes tenham acesso
    return (
        <AuthContext.Provider value={{ signed: logado, user, signIn, signOut, loading, logar, usuario }}>
          {children}
        </AuthContext.Provider>
      );
}

export default AuthContext;