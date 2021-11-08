import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationFirebase from "../Components/Login/firebase.init";

authenticationFirebase()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    const auth = getAuth();


    // Signin with Google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }



    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)

            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [])


    const handleRegistration = (e) => {
        e.preventDefault()


        isLogin ? processLogin(email, password) :
            createNewUser(email, password)


    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUsers(result.user)
                console.log(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUsers(result.user)
                console.log(result.user)
                setError('');
                verificationEmail();
                setUserName()
            })
            .catch((error) => {
                setError(error.message)

            });
    }
    const verificationEmail = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Verification email has been sent successfully')
            });
    }
    const toggle = e => {
        setIsLogin(e.target.checked)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).finally(() => setIsLoading(false))
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            }).catch((error) => {
                setError(error.message)
            });
    }

    return {
        isLoading,
        users,
        isLogin,
        name,
        error,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handlePassword,
        handleEmail,
        toggle,
        handleName

    }
}


export default useFirebase