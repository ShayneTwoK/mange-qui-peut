import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyACrEwXxjKo7HDgbY13bGRvN275FnOsVx4",
    authDomain: "mange-qui-peut.firebaseapp.com",
    projectId: "mange-qui-peut",
    storageBucket: "mange-qui-peut.appspot.com",
    messagingSenderId: "395864565640",
    appId: "1:395864565640:web:61753fbe04f0b382747c3d",
    measurementId: "G-6LJ042DDRB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const clientsCollection = db.collection('clients')

export const getClient = async id => {
    const client = await clientsCollection.doc(id).get()
    return client.exists ? client.data() : null
}

export const updateClient = (id, client) => {
    return clientsCollection.doc(id).update(client)
  }
  
  export const deleteClient = id => {
    return clientsCollection.doc(id).delete()
  }
  
  export const useLoadClient = () => {
    const clients = ref([])
    const close = clientsCollection.onSnapshot(snapshot => {
        clients.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return clients
  }