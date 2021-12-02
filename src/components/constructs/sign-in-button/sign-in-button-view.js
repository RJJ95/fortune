import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <button onClick={() => handleLogin(instance)}>Sign in using Popup</button>
    );
}

export default SignInButton