import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from "../types/types";
import { noteLogout } from './notes';
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword =(email,password)=>{
    return (dispatch)=>{

        dispatch(startLoading())

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
            dispatch(
                finishLoading()
            )
        }).catch(({message})=>{
            dispatch(
                finishLoading()
            )
            console.log(message);
            Swal.fire('Error',message, 'error');
            
        });


    }
}

export const login=(uid, displayName)=>({
  
        type: types.login,
        payload:{
            uid,
            displayName
        }
})

export const startRegisterWithEmailPasswordName=(email,password, name)=>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user})=>{
                await user.updateProfile({displayName:name})
              dispatch(
                  login(user.uid, user.displayName)
              )  
            }).catch(err=>{
                console.log(err);
                Swal.fire('Error',err.message, 'error');})
    }
};

export const startGoogleLogin =()=>{
    return(dispatch)=>{

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
                )
        })

    }
};


export const startLogOut=()=>{
    return  async(dispatch)=>{
        await firebase.auth().signOut();

        dispatch( logout() );
        dispatch(noteLogout());
    }
};

export const logout=()=>({
    type: types.logout
})