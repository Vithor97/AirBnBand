import firebaseApp from '../../firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { array } from 'yup';


const db = firebaseApp.firestore();

const api = {
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

        await db.collection('users').where("tipoUsuario", "==", "Artista").get()
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

    pegaArtistas: (setDados:any) => {
        return db.collection("users").where("tipoUsuario", "==", "Artista")
        .onSnapshot(function(querySnapshot) {
            let arrays: any = []
            querySnapshot.forEach(function(doc) {
                arrays.push(doc.data());
                //console.log(doc.data())
            });
            setDados(arrays)
        });
    },

    cadastraArtista: async (dados: any) =>{
        let hasSaved: any  = false
        const result = await firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
        const uid = result.user?.uid
        await db.collection('users').doc(uid).set({
                id: uid,
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
                tipoUsuario : dados.tipoUsuario,
                avatar: dados.avatar ? dados.avatar : ""
            }).then(function() {
                api.uploadImage(dados.avatar).then(()=>{
                    console.log('imagem foi inserida no storage com sucesso')
                })
                hasSaved = true 
                console.log("Document successfully written!");
                console.log("HAS SAVED: " + hasSaved)
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            return hasSaved
    },

    cadastraContratante: async (dados: any) =>{ 
        let hasSaved: any  = false
        const result = await firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
        await db.collection('users').doc(result.user?.uid).set({
                nome: dados.nome,
                email: dados.email,
                cep: dados.cep,
                logradoro: dados.logradoro,
                cidade: dados.cidade,
                uf: dados.uf,
                bairro:  dados.bairro,
                numero: dados.numero,
                cnpj: dados.cnpj,
                telefone: dados.telefone,
                nomeEstabelecimento: dados.nomeEstabelecimento,
                tipoUsuario : dados.tipoUsuario
               // avatar: dados.avatar ? dados.avatar : ""
        }).then(function() {
            hasSaved = true 
            console.log("Document successfully written!");
            console.log("HAS SAVED: " + hasSaved)
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
        return hasSaved
    },

    uploadImage: async (uri: any) => {
        const response = await fetch(uri)
        const blob = await response.blob()

        const dadosFotos = uri;

        const imageName = dadosFotos.substring(dadosFotos.lastIndexOf('/') + 1)

        var ref = firebaseApp.storage().ref().child('images/' + imageName)

        return ref.put(blob);

    }
}

export default api