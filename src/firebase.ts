import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCuGeb6t3xe5reqQ1_QVNxUkpxakVfuyIM',
  authDomain: 'todoist-clone-7029a.firebaseapp.com',
  projectId: 'todoist-clone-7029a',
  storageBucket: 'todoist-clone-7029a.appspot.com',
  messagingSenderId: '908846684846',
  appId: '1:908846684846:web:36ba67d364d9d28fe2eb3f',
  measurementId: 'G-KYYLXGH7W6',
});

export { firebaseConfig as firebase };
