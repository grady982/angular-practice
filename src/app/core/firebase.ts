// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

export class Firebase {
    public static firebaseConfig = '';

    public static Initialized() {
        firebase.initializeApp(this.firebaseConfig);
    }
}

