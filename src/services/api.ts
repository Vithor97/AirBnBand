import firebaseApp from '../../firebase'
import 'firebase/auth'
import 'firebase/firestore'


const db = firebaseApp.firestore();

export default {
    loginWithEmailAndPassword: async (email: string, senha: string) =>{
        const result = await firebaseApp.auth().signInWithEmailAndPassword(email, senha);
        console.log(result)
        return result
    },
    pegaEnderecos: async ()=> {
        let userRef = db.collection('users').doc('hDLVRtGE4iZsrHxG3RRVyjTxD5k1')
        let getDoc = userRef.collection('endereco').where("estado","==", "SP").get()

        return await getDoc.then(snapshot => {
            return snapshot.docs.map((val)=>{
                return val.id
            })
        })

    },
    pegaUsuarios: async () => {
        let arrays: any = []

        await db.collection('users').where("tipoUsuario", "==", "contratante").get()
        .then(snapshot =>{
            //console.log(snapshot)
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
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
    }

    
}