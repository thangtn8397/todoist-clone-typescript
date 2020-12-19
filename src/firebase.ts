import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyC7PL5-pK7VMFGgWq73mzCwO-BniUfF93c',
  authDomain: 'todos-526d4.firebaseapp.com',
  databaseURL: 'https://todos-526d4.firebaseio.com',
  projectId: 'todos-526d4',
  storageBucket: 'todos-526d4.appspot.com',
  messagingSenderId: '411929389872',
  appId: '1:411929389872:web:0256e43e6305cdc17eb6f5',
  measurementId: 'G-2N724Z455F',
  //  apiKey: 'AIzaSyCuGeb6t3xe5reqQ1_QVNxUkpxakVfuyIM',
  //  authDomain: 'todoist-clone-7029a.firebaseapp.com',
  //  projectId: 'todoist-clone-7029a',
  //  storageBucket: 'todoist-clone-7029a.appspot.com',
  //  messagingSenderId: '908846684846',
  //  appId: '1:908846684846:web:36ba67d364d9d28fe2eb3f',
  //  measurementId: 'G-KYYLXGH7W6',
});

export { firebaseConfig as firebase };
