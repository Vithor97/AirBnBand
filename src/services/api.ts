import firebaseApp from '../../firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { auth } from 'firebase';

const db = firebaseApp.firestore();

export default {
    loginWithEmailAndPassword: async (email: string, senha: string) =>{
        const result = await firebaseApp.auth().signInWithEmailAndPassword(email, senha);

        console.log(result);

        return result;
    },

    pegaEnderecos: async ()=> {
        let userRef = db.collection('users').doc('hDLVRtGE4iZsrHxG3RRVyjTxD5k1');
        let getDoc = userRef.collection('endereco').where("estado","==", "SP").get();

        return await getDoc.then(snapshot => {
            return snapshot.docs.map((val)=>{
                return val.id
            })
        });
    },

    pegaUsuarios: async () => {
        let arrays: any = []

        await db.collection('users').where("tipoUsuario", "==", "contratante").get()
        .then(snapshot =>{
            //console.log(snapshot)
            if (snapshot.empty) {
                return console.log('No matching documents.');
            }

            snapshot.forEach(doc => {
                //console.log(doc.id, '=>', doc.data().CEP);
                arrays.push(doc.data())
               
                //setUseer(doc.data())
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });

        return arrays
    },

    cadastraArtista: async (dados: any) =>{
        console.log("---- Dentro da função cadastraArtista ----");
        console.log(dados);

        if(dados.avatar){
            return firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha).then(data =>{
                return db.collection('users').doc(data.user?.uid).set({
                    bio: dados.bio,
                    nome: dados.nome,
                    cnpj: dados.cnpj,
                    email: dados.email,
                    contatoVisivel: dados.contatoVisivel,
                    estiloMusical: dados.estiloMusical,
                    instagram: dados.instagram,
                    nomeArtistico: dados.nomeArtistico,
                    qtdIntegrantes: dados.qtdIntegrantes,
                    selectEstados: dados.selectEstados,
                    telefone: dados.telefone,
                    avatar: dados.avatar
                })
                .catch(e => console.log(e))
            }).catch(e=> {
                return e
            });
        }

        else{
            return firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha).then(data =>{
                return db.collection('users').doc(data.user?.uid).set({
                    bio: dados.bio,
                    nome: dados.nome,
                    cnpj: dados.cnpj,
                    email: dados.email,
                    contatoVisivel: dados.contatoVisivel,
                    estiloMusical: dados.estiloMusical,
                    instagram: dados.instagram,
                    nomeArtistico: dados.nomeArtistico,
                    qtdIntegrantes: dados.qtdIntegrantes,
                    selectEstados: dados.selectEstados,
                    telefone: dados.telefone,
                    avatar: null
                })
                .catch(e => console.log(e))
            }).catch(e=> {
                return e
            });
        }
    },

    cadastraContratante: async (dados: any) =>{
        console.log("---- Dentro da função cadastraContratante ----");
        console.log(dados);

        if(dados.avatar){
            return firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha).then(data =>{
                return db.collection('users').doc(data.user?.uid).set({
                    bio: dados.bio,
                    nome: dados.nome,
                    cnpj: dados.cnpj,
                    email: dados.email,
                    contatoVisivel: dados.contatoVisivel,
                    estiloMusical: dados.estiloMusical,
                    instagram: dados.instagram,
                    nomeArtistico: dados.nomeArtistico,
                    qtdIntegrantes: dados.qtdIntegrantes,
                    selectEstados: dados.selectEstados,
                    telefone: dados.telefone,
                    avatar: dados.avatar
                })
                .catch(e => console.log(e))
            }).catch(e=> {
                return e
            });
        }

        else{
            return firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha).then(data =>{
                return db.collection('users').doc(data.user?.uid).set({
                    bio: dados.bio,
                    nome: dados.nome,
                    cnpj: dados.cnpj,
                    email: dados.email,
                    contatoVisivel: dados.contatoVisivel,
                    estiloMusical: dados.estiloMusical,
                    instagram: dados.instagram,
                    nomeArtistico: dados.nomeArtistico,
                    qtdIntegrantes: dados.qtdIntegrantes,
                    selectEstados: dados.selectEstados,
                    telefone: dados.telefone,
                    avatar: null
                })
                .catch(e => console.log(e))
            }).catch(e=> {
                return e
            });
        }
    }
}