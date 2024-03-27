import { initializeApp } from 'firebase/app'
import { getStorage, listAll, ref } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCFWtiPLleh_PqDoEjYkTktMEqYSyN_MiI',
    authDomain: 'konstef-420ab.firebaseapp.com',
    projectId: 'konstef-420ab',
    storageBucket: 'konstef-420ab.appspot.com',
    messagingSenderId: '1084081248700',
    appId: '1:1084081248700:web:dd1149d7689391e67cb3b9',
    measurementId: 'G-J7XLZ1ENRV',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage()
const sorageRef = ref(storage)

const imagesRef = ref(storage, 'images/')

const getListOfImages = async () => {}
export { imagesRef }
