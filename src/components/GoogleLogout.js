import React from 'react';
import { useGoogleLogout } from 'react-google-login'
import { useUserContext } from '../context/UserContext';

const clientId = "648688523467-vb9lh5lv0gr5ffmgqd1t4qh2gfb1afv9.apps.googleusercontent.com"

function GoogleLogout() {
    const {Logout}=useUserContext();
    const onLogoutSuccess = (res) => {
        alert('Logged out Successfully');

    }

    const onFailure = () => {
        console.log('Handle failure cases');
    }

    const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        Logout,
        onFailure,
    });

    return (
        <button onClick={signOut} className="button ">
            <img src="icons/google.svg" alt="google logout" className="icon"/>
            <span className="button Text ">sign out</span>
        </button>
    )
}

export default GoogleLogout;