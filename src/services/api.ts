import firebaseApp from '../../firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const db = firebaseApp.firestore();

const api = {
    loginWithEmailAndPassword: async (email: string, senha: string) =>{
        const result = await firebaseApp.auth().signInWithEmailAndPassword(email, senha);
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
            if (snapshot.empty) {
                return console.log('No matching documents.');
            }
            snapshot.forEach(doc => {
                arrays.push(doc.data())
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
            });
            setDados(arrays)
        });
    },

    pegaArtistasFavoritos: async (usurarioId:any,setDados:any) => {
        console.log("Dentro do metod de pega artista favorito")
        let doc = db.collection('users').doc(usurarioId);
        
        doc.onSnapshot(async docSnapshot => {
            console.log("snapshot")
            const favoritos: Array<any> = await api.pegaFavoritos(usurarioId)
            console.log(favoritos)

            if(favoritos.length){
                console.log("Array cheio")
                try {
                    await db.collection('users').where("id", "in", favoritos)
                    .onSnapshot(function(querySnapshot) {
                        let arrays: any = []
                        querySnapshot.forEach(function(doc) {
                            
                            arrays.push(doc.data());
                        });
                        setDados(arrays)
                    });
                } catch (error) {
                   console.log(error) 
                }
            }
            else{
                console.log("Array Vazio")
                setDados([])
            }
        }, err => {
            console.log(`Encountered error: ${err}`);
        });

        
        
    },

    cadastraArtista: async (dados: any) =>{
        let hasSaved: any  = false
        const result = await firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
        await api.uploadImage(dados.avatar)
        const imageURL = await api.pegaImage(dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1))
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
                avatar: dados.avatar ? imageURL : "",
 
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

    cadastraContratante: async (dados: any) =>{ 
        let hasSaved: any  = false
        const result = await firebaseApp.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
        await api.uploadImage(dados.avatar)
        const imageURL = await api.pegaImage(dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1))
        const uid = result.user?.uid
        await db.collection('users').doc(result.user?.uid).set({
                id: uid,
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
                tipoUsuario : dados.tipoUsuario,
                avatar: imageURL,
                avatarId: dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1),
                favoritos: []
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

    getImage: (path:any) => {
        console.log(path)
        return firebaseApp.storage().refFromURL("gs://airbnband-256a5.appspot.com/images/" + path).getDownloadURL().then((url) => {
            return url
        })
    },
    pegaImage: async (path:any) => {
        console.log(path)
        return await firebaseApp.storage().refFromURL("gs://airbnband-256a5.appspot.com/images/" + path).getDownloadURL().then((url) => {
            return url
        })
    },
    uploadImage: async (uri: any) => {
        const response = await fetch(uri)
        const blob = await response.blob()

        const dadosFotos = uri;

        const imageName = dadosFotos.substring(dadosFotos.lastIndexOf('/') + 1)

        var ref = firebaseApp.storage().ref().child('images/' + imageName)

        return ref.put(blob);
    },
    pegaUsuario: async (uid: any) => {

        try {
            let result = await db.collection('users').doc(uid).get()
         
            if(!result.exists){
                return null
            }
            else{
                return result.data()
            }
        } catch (error) {
            console.log('error' + error)
        }
    },
    atualizaUsuario: async (dados: any, setUsuario: any) =>{
        console.log('Metodo atualizaUsuario')
        try {
            let dadosUsuario = await api.pegaUsuario(dados.id)
            let idFoto = dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1)

            let mudaIdAvatar: any = dadosUsuario

            if(mudaIdAvatar.avatarId !== dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1)){
             
                await api.uploadImage(dados.avatar)
            }
            let updateData: any = dados
            
            updateData.avatar = await api.pegaImage(dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1))
            updateData.avatarId = idFoto

            await db.collection('users').doc(updateData.id).update(updateData)
            let resultadoUser = await api.pegaUsuario(updateData.id)
            

            if (resultadoUser){
                setUsuario(resultadoUser)
                return  true
            }
        
        } catch (error) {
            console.log(error)
        }
    },
    atualizaUsuarioArtista: async (dados: any, setUsuario: any) =>{
        console.log('Metodo atualizaUsuario Artista')
        try {

            let dadosUsuario = await api.pegaUsuario(dados.id)
            let idFoto = dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1)

            let mudaIdAvatar: any = dadosUsuario
            if(mudaIdAvatar.avatarId !== dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1)){
                await api.uploadImage(dados.avatar)
            }
            let updateData: any = dados
            
            updateData.avatar = await api.pegaImage(dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1))
            updateData.avatarId = idFoto

            await db.collection('users').doc(updateData.id).update(updateData)
            let resultadoUser = await api.pegaUsuario(updateData.id)
            
            if (resultadoUser){
                setUsuario(resultadoUser)
                return  true
            }
        
        } catch (error) {
            console.log(error)
        }
    },
    favoritar: async (idFavorito:any, idUsuario: any) => {
        await db.collection('users').doc(idUsuario).update({
            favoritos: firebaseApp.firestore.FieldValue.arrayUnion(idFavorito)
        })
    },
    desfavoritar: async (idFavorito:any, idUsuario: any) => {
        await db.collection('users').doc(idUsuario).update({
            favoritos: firebaseApp.firestore.FieldValue.arrayRemove(idFavorito)
        })
    },
    pegaFavoritos: async (idUsuario: any)=> {
        let results: any =  await db.collection('users').doc(idUsuario).get()
        //console.log("Dento do metodo pegaFavoritos")
        return results.data().favoritos
    },
    //add novo campo /APENAS TESTE/
    addNewField: async (idUsuario: any) =>{
        await db.collection('users').doc(idUsuario).update({
            chats: [{chatId: 'oioioi'}]
        })
    },

    newChatUsers: async(user: any, user2: any, firstMessage: any, setChatId:any) =>{
        let now = new Date();
        let newChat = await db.collection('chats').add({
            messages: [],
            users: [user.id, user2.id]
        });

        setChatId(newChat.id)

        db.collection('chats').doc(newChat.id).update({
            messages: firebaseApp.firestore.FieldValue.arrayUnion({
                author: user.id,
                name: user.nome,
                body: firstMessage,
                date: now
            })
        });

        db.collection('users').doc(user.id).update({
            chats: firebaseApp.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                lastMessage: firstMessage,
                lastMessageDate: now,
                with: user2.id
            })
        })

        db.collection('users').doc(user2.id).update({
            chats: firebaseApp.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                lastMessage: firstMessage,
                lastMessageDate: now,
                with: user.id
            })
        })
    },

    onChatContent: (chatId:any, setList:any, setUsers:any) =>{
        let arrays: any = []
        return db.collection('chats').doc(chatId).onSnapshot((doc)=>{
            if(doc.exists){
                let data:any = doc.data();
                data.messages.map((t:any, index:any)=>{
                    console.log(index+1)
                    arrays.push({_id: index+1, text: t.body, createdAt: t.date.toDate(), user: {_id: t.author, name: t.name}})
                    //setList((prevState:any) => [...prevState, {_id: index+1, text: t.body, createdAt: t.date.toDate(), user: {_id: t.author, name:t.author } }])
                })

                setList(arrays.sort(function(a: any, b: any){return b._id - a._id}))
        
            }
        });
    },
    onChatList:  async (userId:any, setChatList:any) => {


        let doc = db.collection('users').doc(userId);
        let i = 0
        doc.onSnapshot(async docSnapshot =>{
            let data: any = docSnapshot.data()
            let r = data.chats.map( (d:any)=>{
                return d.with
            })
            let chatsId = data.chats.map( (d:any)=>{
                return d.chatId
            })
            if(r.length){
                try {
                    await db.collection('users').where("id", "in", r)
                    .onSnapshot(function(querySnapshot) {
                        let arrays: any = []
                        querySnapshot.forEach(function(doc) {
                            
                            let results: any = doc.data()
             
                            arrays.push({
                                id: results.id,
                                nome: results.nome,
                                chatId: chatsId[i]
                            });
                            i++
                        });
                        setChatList(arrays)
                    });
                } catch (error) {
                   console.log(error) 
                }
            }
            else{
                setChatList([])
            }
        })
        
        
    }
    

}

export default api