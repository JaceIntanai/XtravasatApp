import { auth } from './firebase'

export const doSignInWithEmailAndPassword = (email, password) => 
    auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => 
    auth.signOut();

export const findUid = () => {
    auth.onAuthStateChanged(function(user){
        console.log("Hey" + user.uid)
        return user.uid
    }.bind(this))
}