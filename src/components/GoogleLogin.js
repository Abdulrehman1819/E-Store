import React, {useEffect, useState} from 'react'
import {GoogleLogin, useGoogleLogin} from 'react-google-login'
import {gapi} from 'gapi-script'
import axios from "axios";
import {useUserContext} from "../context/UserContext";
import {Route} from "react-router";
import SetCookie from "../components/SetCookie";
import GetCookie from "../components/GetCookie";
import RemoveCookie from "../components/RemoveCookie";
const clientId = '648688523467-vb9lh5lv0gr5ffmgqd1t4qh2gfb1afv9.apps.googleusercontent.com'

const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 -5 * 60) * 1000;

        setTimeout(refreshToken, refreshTiming)
    }

    setTimeout(refreshToken, refreshTiming)
}

function GoogleLoginCredentials(props) {
    const [usergoogledata, setusergoogledata] = useState({});
    const {contextcheckdata,userloggedin}=useUserContext();

    if(usergoogledata  !== null) {
   
   
        contextcheckdata(usergoogledata.name,usergoogledata.email,null,usergoogledata.imageUrl);
    }

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = (res) => {
SetCookie('userin',JSON.stringify(res.data))
        console.log('Login Success: currentUser:', res.profileObj);
        setusergoogledata(res.profileObj);

        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // alert(
        //     `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        cookiePolicy: 'single_host_origin'
    })


    return (
        <div className="flex w-full">
            <button
                type="button"
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                onClick={signIn}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
            </button>
        </div>
    );
}

export default GoogleLoginCredentials;